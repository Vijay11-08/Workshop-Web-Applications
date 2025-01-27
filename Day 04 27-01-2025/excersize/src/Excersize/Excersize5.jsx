import React,{ useState } from "react";

// impliment pagination with the help of the usestate create a static arry of size 25 
// and display the 5 buttons
// when user click on button 1 , display items 1 to 5 
// when user click on button 2 , display items 6 to 10
// when user click on button 3 , display items 11 to 15
// when user click on button 4 , display items 16 to 20
// when user click on button 5 , display items 21 to 25

function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [items, setItems] = useState(Array.from({ length: 25 }, (_, i) => i + 1));
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div>
            <h1> Pagination </h1>
            <div>
                {currentItems.map(item => (
                    <div key={item}>{item}</div>
                ))}
            </div>
            <div>
                {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => i + 1).map(number => (
                    <button key={number} onClick={() => paginate(number)}>{number}</button>
                ))}
            </div>
        </div>
        );

}

export default Pagination;