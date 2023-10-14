import React from "react"
import "./Card.css"

export default function Card({task , description , priority} ){
    return(
        <div className="task-card">
            <h1 className="task">{task}</h1>
            <p className="description">{description}</p>
            <p className="priority">{priority}</p>
        </div>
    )
}