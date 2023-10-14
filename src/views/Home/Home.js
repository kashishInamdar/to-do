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
        {
            id: 2,
            title: "learn CRUD Opration",
            description: "Quch nahi aata yesa bolege",
            priority: "High"
        },
        {
            id: 1,
            title: "Complete all opration ",
            description: "Properly",
            priority: "to High"
        },
    ])
    

    return (
        <div className="main-page">

            <div className="showTask">
                <h1 className="heading">Show Task</h1>
                <div>
                    {
                        taskList.map((tasks, index) => {
                            const { title, description, priority, id } = tasks;

                            return (
                                <div>
                                    <Card id={id} title={title} description={description} priority={priority} />
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className="add-task">
                <h1 className="heading">Add Task</h1>
                <form className="task-input">
                    <input type="text"
                        className="inputs"

                    />

                    <input type="text"
                        className="inputs"

                    />

                    <input type="text"
                        className="inputs"

                    />

                </form>

            </div>
        </div>
    )

}

