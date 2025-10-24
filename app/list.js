"use client"

import { useState } from 'react'

export default function List() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [error, setError] = useState("")

    const handleInputChange = e => setInput(e.target.value)
    const handleEnterToAdd = e => { if (e.key === 'Enter') add() }
    const maxCharacters = 30

    function add() {
        if (input.trim() === "") {
            setError("Please, fill in this field")

            setTimeout(() => {
                setError("")
            }, 3000)
            return
        }

        setTasks([...tasks, input])
        setInput("")
    }
    function clearAll() {
        setInput("")
        setTasks([])
    }
    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    return (
        <div>
            <h1>To-do list</h1>
            {error && <p>{error}</p>}
            <p>{input.length}/{maxCharacters}</p>
            <p>You have <span style={{ fontWeight: "bold" }}>{tasks.length}</span> task(s)</p>
            <input type="text" placeholder='Type a task' value={input} onChange={handleInputChange} onKeyDown={handleEnterToAdd} maxLength={maxCharacters} />
            <button onClick={add}>Add</button>
            <button onClick={clearAll}>Clear all</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task} <button onClick={() => deleteTask(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}