import React from "react"
import "./Card.css"

export default function Card({title  , description , priority ,id} ){
    return(
        <div className="task-card">
            <h1 className="task">{title}</h1>
            <p className="description">{description}</p>
            <p className="priority">{priority}</p>
        </div>
    )
}