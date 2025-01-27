import React,{ useState } from "react";

// Impliment day and night theming with the help of usestate and switck
//also change background color if day page white and night page dark theame

function DayNight(){
    const [theme, setTheme] = useState('day');
    
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

        </div>

    );
}

export default DayNight;