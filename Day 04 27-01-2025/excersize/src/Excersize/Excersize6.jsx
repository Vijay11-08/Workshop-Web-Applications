import React,{ useState } from "react";

// Impliment Content finder with the help of usestate.
// whenever user type into searchbox .

// if will show all items of the list which contains that Content.

// allow user to add text items to into list using text box add button.

function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("");
    const [items, setItems] = useState([]);
    
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    
    const handleAdd = () => {
        if(searchTerm){
            setItems([...items, searchTerm]);
            setSearchTerm("");
        }
    }
    
    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..."/>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase())).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>    

            <h3>All Items:</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            

        </div>
        );


}

export default SearchBar;