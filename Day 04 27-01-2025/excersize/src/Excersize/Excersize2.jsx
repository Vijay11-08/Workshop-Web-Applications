import React,{ useState } from "react";
// Create a to-do list with the help of the usestate .
//         allow user to remove completed task using task manager (useState)
//         2 textboxes and 2 buttons
//         one for add task and one for remove task using orderlist number only

function ToDoList()
{
    // const [tasks, setTasks] = useState([]);
    // const [task, setTask] = useState('');
    
    // // Function to add task
    // const addTask = () =>
    // {
    //     if(task.trim() === '') return;
    //     setTasks([...tasks, task]);
    //     setTask('');
    // }
    
    // // Function to remove task
    // const removeTask = (index) =>
    //     {
    //         const updatedTasks = [...tasks];
    //         updatedTasks.splice(index, 1);
    //         setTasks(updatedTasks);
        
    //         }
            
    // return(
    //     <div className="container">
    //         <h1>Task List</h1>
    //         <input type="text" placeholder="Add Task" value={task} onChange={(e) => setTask(e.target.value)}/>
    //         <button onClick={addTask}>Add Task</button>
    //         <input type="text" placeholder="Remove Task" value={task} onChange={(e) => setTask(e.target.value)}/>
    //         <button onClick={() => removeTask(Number(task) - 1)}>Remove Task</button>

    //         <ul>
    //             {tasks.map((task, index) =>
    //                 <li key={index}>{task} <button onClick={() => removeTask(index)}>Remove</button></li>
    //             )}
    //         </ul>
    //         </div>
    //     );
  
    const [list, setList]= useState([]);
    const[input, setInput]= useState("");
    const[i,setI]= useState(0);
    return(
        <div>
            <h1>Task List</h1>
            <input type="text" onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={()=> setList([...list, input])}>Add Task</button>

            <input type="number" value={i} onChange={(e)=>setI(Number(e.target.value))} />

            <button onClick={()=> {
                let li = list;
                li.splice(i,1);
                console.log(li);
                setList(li);
                setI(0);
            }}>
                remove
            </button>

            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default ToDoList;