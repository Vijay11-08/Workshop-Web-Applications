import React,{ useState } from "react";

// Impliment day and night theming with the help of usestate and switck
//also change background color if day page white and night page dark theame

function DayNight(){
    const [theme, setTheme] = useState('day');
    const [clr1,setColor] = useState("#565656");
    const [clr2, setColor2] = useState("#F4F4F4");
    
    const toggleTheme = () => {
        setTheme(theme === 'day'? 'night' : 'day');
    }
    
    const styles = {
        day: {
            backgroundColor: 'white',
            color: 'black',
        },
        night: {
            backgroundColor: 'black',
            color: 'white',
        }
        }
        
    return (
        <div style={styles[theme]}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1>Welcome to Day Night Theme</h1>
            <p>This is a simple example of day and night themeing in React.</p>

            <input type="color" value={clr1} onChange={(e)=> setColor(e.target.value)}/>
            <input type="color" value={clr2} onChange={(e)=> setColor2(e.target.value)}/>
            <p style={{color:clr1,backgroundColor:clr2}}> this is a para</p>

        </div>

    );
}

export default DayNight;