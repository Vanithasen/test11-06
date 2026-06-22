import React, { useState } from "react";
import "./Todo.css";

function Todo() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Add Task
    const addTask = () => {
        if (task.trim() === "") return;

        const newTask = {
            id: Date.now(),
            text: task,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setTask("");
    };

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
    };

    // Mark Complete
    const toggleComplete = (id) => {
        setTasks(
            tasks.map((item) =>
                item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
            )
        );
    };

    return (
        <div className="container">
            <h1>To-Do Application</h1>

            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button onClick={addTask}>Add Task</button>
            </div>

            {tasks.length === 0 ? (
                <p className="empty">No tasks available</p>
            ) : (
                <ul>
                    {tasks.map((item) => (
                        <li key={item.id}>
                            <span
                                className={item.completed ? "completed" : ""}
                            >
                                {item.text}
                            </span>

                            <div className="buttons">
                                <button
                                    className="complete-btn"
                                    onClick={() => toggleComplete(item.id)}
                                >
                                    {item.completed ? "Undo" : "Complete"}
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteTask(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Todo;