import { useState } from "react";

// Create a Controlled Input Which Allows Only Alphanumeric Characters
// If User Input Any Specific Characters Then Remove Special Characters (useState)  function AplhabatExcersize()
function AplhabatExcersize()
{
    // const [input, setInput] = useState("");
    // const [output, setOutput] = useState("");

    // sirr
    const [input1, setInput  ] = useState(" ");
    const validInput = new RegExp("^([a-zA-Z0-9]+)$");

    // function handleChange(e)
    // {
    //     const value = e.target.value;
    //     const alphanumeric = value.replace(/[^a-zA-Z0-9]/g, '');
    //     setInput(alphanumeric);
    //     setOutput(alphanumeric);
    // }

    return (
        <div>
           {/* Write <input type="text" value={input} onChange={handleChange} />
            <p>Output: {output}</p> */}

            {/* sir code */}

            <input type="text" value={input1} onChange={(e)=> {
                console.log = e.target.value;
                if(validInput.test(e.target.value)){
                    setInput(e.target.value);
                }
            }
            }
            placeholder="Enter Text Here .....!" />
            <br />
            {input1}
        </div>
    )
}

export default AplhabatExcersize;

