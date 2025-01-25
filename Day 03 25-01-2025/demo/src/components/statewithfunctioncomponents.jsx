import React,{ useState } from "react";

function UseStateFun ()
{  
        const [count, setCount] = useState(0);

        return (
            <div>
                
                <p>You Click {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click Me</button>
               {/* <button onClick={() => setCount(count - 1)}>Decrement</button> */}
            </div>
        );
}
export default UseStateFun;