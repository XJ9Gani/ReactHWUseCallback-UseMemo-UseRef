import React, { useState, useCallback } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);


    const generateTask = (index) => ({
        id: index,
        title: `task-${index}`
    });


    const addTask = useCallback(() => {
        setTasks((prevTasks) => {
            const newIndex = prevTasks.length + 1;
            return [...prevTasks, generateTask(newIndex)];
        });
    }, []); 

    return (
        <div>
            <ul className='container'>
                {tasks.map((task) => (
                    <li key={task.id} className="task">
                        <p className='task-title'>{task.title}</p>
                    </li>
                ))}
            </ul>
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}
