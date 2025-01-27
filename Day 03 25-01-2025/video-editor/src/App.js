import React, { useState, useEffect } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg'; // Correct import from latest version
import ReactPlayer from 'react-player';
import './App.css'; // Import CSS

function App() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [outputFile, setOutputFile] = useState(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const [ffmpeg, setFfmpeg] = useState(null);

  // Initialize FFmpeg instance and load it
  useEffect(() => {
    const loadFFmpeg = async () => {
      setLoading(true);
      const ffmpegInstance = new FFmpeg({ log: true });
      await ffmpegInstance.load();
      setFfmpeg(ffmpegInstance);
      setLoading(false);
    };

    loadFFmpeg();
  }, []);

  // Handle video file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setVideoUrl(URL.createObjectURL(file));

    // Get the video duration
    const videoElement = document.createElement('video');
    videoElement.src = URL.createObjectURL(file);
    videoElement.onloadedmetadata = () => {
      setVideoDuration(videoElement.duration);
    };
  };

  // Handle video cutting using FFmpeg
  const handleVideoCut = async () => {
    if (!ffmpeg) return;

    setLoading(true);

    // Write the video file to FFmpeg virtual file system
    await ffmpeg.FS('writeFile', 'input.mp4', await fetch(videoFile));

    // Cut the video from startTime to endTime (in seconds)
    await ffmpeg.run(
      '-i', 'input.mp4',
      '-ss', startTime.toString(),
      '-to', endTime.toString(),
      '-c', 'copy',
      'output.mp4'
    );

    // Get the output file from FFmpeg virtual file system
    const data = ffmpeg.FS('readFile', 'output.mp4');

    // Create a URL for the processed video
    const outputBlob = new Blob([data.buffer], { type: 'video/mp4' });
    const outputUrl = URL.createObjectURL(outputBlob);
    setOutputFile(outputUrl);

    setLoading(false);
  };

  // Download the cut video
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = outputFile;
    a.download = 'output.mp4';
    a.click();
  };

  return (
    <div className="App">
      <h1>Video Editing Platform</h1>
      
      {loading && <div className="loader"></div>}

      {/* Video File Upload */}
      <div>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
        />
      </div>

      {/* Video Player */}
      {videoUrl && (
        <div>
          <h2>Video Player</h2>
          <ReactPlayer url={videoUrl} controls />
        </div>
      )}

      {/* Video Cutting */}
      {videoFile && (
        <div>
          <h2>Video Cutting</h2>
          <p>Video Duration: {videoDuration}s</p>
          <label>
            Start Time: 
            <input 
              type="number" 
              value={startTime} 
              onChange={(e) => setStartTime(e.target.value)} 
              min="0"
              max={videoDuration}
            />
          </label>
          <label>
            End Time: 
            <input 
              type="number" 
              value={endTime} 
              onChange={(e) => setEndTime(e.target.value)} 
              min="0"
              max={videoDuration}
            />
          </label>
          <button onClick={handleVideoCut} disabled={loading}>Cut Video</button>
        </div>
      )}

      {/* Processed Video Output */}
      {outputFile && (
        <div>
          <h2>Processed Video</h2>
          <ReactPlayer url={outputFile} controls />
          <button onClick={handleDownload}>Download Video</button>
        </div>
      )}

    </div>
  );
}

export default App;
