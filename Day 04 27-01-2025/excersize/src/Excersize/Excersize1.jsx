import React,{ useState } from "react";

function AplhabatExcersize()
{
        const [input, setInput] = useState("");
        const [output, setOutput] = useState("");
        const [error, setError] = useState("");
        const [isSubmit, setIsSubmit] = useState(false);
        const [isError, setIsError] = useState(false);
        
        const handleChange = (e) => {
            setInput(e.target.value);
            setIsError(false);
            setIsSubmit(false);
            setOutput("");
            };
            
        const handleSubmit = (e) => {
            e.preventDefault();
            if (/^[a-zA-Z0-9]+$/.test(input)) {
                setOutput(input);
                setIsError(false);
                setIsSubmit(true);
            } else {
                setError("Please enter only alphanumeric characters.");
                setIsError(true);
            }
        };
        
        return (
            <div>
            <h2>Aplhabat Excersize</h2>
            <form onSubmit={handleSubmit}>
            <label>Enter a string:</label>
            <input type="text" value={input} onChange={handleChange} />
            {isError && <p>{error}</p>}
            {isSubmit && <p>Output: {output}</p>}

            
            </form>

            </div>

        );
        
    }
{/* <p><b>Create a Controlled Input Which Allows Only Alphanumeric Characters.</b></p>
<p><b>If User Input Any Specific Characters Then Remove Special Characters (useState)</b></p> */}
export default AplhabatExcersize;