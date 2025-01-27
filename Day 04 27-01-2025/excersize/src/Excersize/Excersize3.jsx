import React,{useState} from "react";

// cretae a color ticker with the help of the usestate which will upade the 
// color of backgroung for a paragraph.
// another color picker will alllow the color change of text color.
function ColorPicker()
{
    const [color, setColor] = useState("#000000");
    const [textColor, setTextColor] = useState("#ffffff");
    
    // Function to change the background color
    const changeColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);
        }
        // Function to change the text color
        const changeTextColor = () => {
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            setTextColor(randomColor);
        }

        // The paragraph has the randomly generated color.
        return (
            <div>
                <button onClick={changeColor}>Change Background Color</button>
                <button onClick={changeTextColor}>Change Text Color</button>
                <p style={{ backgroundColor: color, color: textColor }}>This is a paragraph.</p>  
            </div>
            );
}

export default ColorPicker;