import React,{useState} from "react";

// cretae a color ticker with the help of the usestate which will upade the 
// color of backgroung for a paragraph.
// another color picker will alllow the color change of text color.
function ColorPicker()
{
    const [color, setColor] = useState("#000000");
    const [textColor, setTextColor] = useState("#ffffff");
        const [clr1,setColor1] = useState("#565656");
        const [clr2, setColor2] = useState("#F4F4F4");
    
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

                 <input type="color" value={clr1} onChange={(e)=> setColor1(e.target.value)}/>
            <input type="color" value={clr2} onChange={(e)=> setColor2(e.target.value)}/>
            <p style={{color:clr1,backgroundColor:clr2}}> this is a para</p> 
            </div>
            );
}

export default ColorPicker;