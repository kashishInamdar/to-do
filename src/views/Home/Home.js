import React, { useEffect, useState } from "react";
import Card from "../../component/Card/Card";
import "./Home.css"

export default function Home() {

    const [taskList, setTaskList] = useState([
        {
            task: "khana banana he",
            description: "bhuk lagne pr",
            priority: "mudium",
        },
        {
            task: "Padhai krni he",
            description: "Sir ki dat se bachnake ke liye",
            priority: "High",
        },
        {
            task: "Ghumne jana he",
            description: "Man ko rahat ki zarurat he",
            priority: "High",
        }
    ])
    localStorage.setItem("Task", JSON.stringify(taskList))

    // ---------- Set Inputs ------------------



    // Get Data From Local Storage
   useEffect(()=>{
        const list = JSON.parse(localStorage.getItem("Task"))
        if(list && list.length > 0){
            setTaskList(list)
        }
   },[])
    
    return (
        <div className="main-page" >
            <div className="showTask">
                <h1 className="heading">Show Task</h1>
                {
                    taskList.map((tasks)=>{
                        const {task , description , priority } = tasks;

                        return(
                            <div>
                                <Card task={task} priority={priority} description={description}/>
                            </div>
                        )
                    })
                }

            </div>
            <div className="add-task">
                <h1 className="heading">Add Task</h1>
               <div className="task-input">
                <input 
                type="text" 
                className="inputs" 
                
                />

                <input type="text" className="inputs" />

                <input type="text" className="inputs" />
               </div>

            </div>

        </div>

    )
}