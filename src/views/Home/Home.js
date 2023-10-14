import React, { useState } from "react";
import Card from "../../component/Card/Card";

import "./Home.css"

export default function Home() {

    const [taskList, setTaskList] = useState([
        {
            id: 1,
            title: "Complete To-Do App",
            description: "Nahi to piche rehejaygi",
            priority: "High"
        },
       
    ])

    const [title , setTitle] = useState("");
    const [priority , setPriority] = useState("");
    const [description , setDescription] = useState(""); 

    const AddToList = ()=>{
        const random = Math.floor(Math.random() * 100)
        const obj = {
            id : random,
            title : title ,
            description : description,
            priority : priority
        }
        setTaskList([...taskList , obj]);

        setDescription('');
        setTitle('');
        setPriority("")

    }
    

    return (
        <div className="main-page">

            <div className="showTask">
                <h1 className="heading">Show Task</h1>
                <div>
                    {
                        taskList.map((tasks, index) => {
                            const { title, description, priority, id } = tasks;

                            return (
                                <div key={index}>
                                    <Card id={id} title={title} description={description} priority={priority}   />
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className="add-task">
                <h1 className="heading">Add Task </h1>
                <form className="task-input">
                
                    <input type="text"
                        placeholder="Task"
                        className="inputs"
                        value={title}
                        onChange={(e)=>{
                            setTitle(e.target.value)
                        }}
                      
                    />
                  
                    <input type="text"
                        className="inputs"
                        placeholder="description"
                        value={description}
                        onChange={(e)=>{
                            setDescription(e.target.value)
                        }}
                    />
                    
                    <input type="text"
                        className="inputs"
                        placeholder="priority"
                        value={priority}
                        onChange={(e)=>{
                            setPriority(e.target.value)
                        }}
                    />

                    <button
                    type="button"
                     className="button"
                     onClick={AddToList}
                     >ADD</button>

                </form>

            </div>
        </div>
    )

}

