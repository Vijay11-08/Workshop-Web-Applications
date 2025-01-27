import React,{ useState } from "react";

// Create a to-do list with the help of the usestate .
//         allow user to remove completed task using task manager (useState)
//         2 textboxes
//         1. Allow User To Add Task 
//         2. Allow User To completed task using  Remove Task

//         2 button
//         1 for add and 1 for remove task
function ToDoList()
{
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');
    const [completedTask, setCompletedTask] = useState([]);
    
    // Function to add new task
    const addTask = () => {
        if(task.trim() === '') {
            alert('Task cannot be empty!');
            return;
        }
        setTaskList([...taskList, task]);
        setTask('');
    }
    
    // Function to remove task
    const removeTask = (index) => {
        setTaskList(taskList.filter((_, i) => i!== index));
    }
    
    // Function to mark task as completed
    const completeTask = (index) => {
        const completedTasks = [...completedTask, taskList[index]];
        setTaskList(taskList.filter((_, i) => i!== index));
        setCompletedTask(completedTasks);
    }
    
    return (
        <div>
            <h1>To-Do List</h1>
            
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Task" />
            <button onClick={addTask}>Add Task</button>
            
            <h2>Task List</h2>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Remove</button>
                        <button onClick={() => completeTask(index)}>Complete</button>
                    </li>
                ))}
            </ul>
            
            <h2>Completed Tasks</h2>
            <ul>
                {completedTask.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
                <button onClick={() => setCompletedTask([])}>Clear Completed Tasks</button>

            </ul>
        </div>

    );


}

export default ToDoList;