import "./AllTasks.css"
import data from "../data"
import {useState} from "react"

const AllTasks = () =>{
    const [myTask , setMyTask] = useState(data)

const tasksHandler = (idecko) => {
    const filteredTasks = myTask.filter((oneTask) =>{
        return oneTask.id !== idecko
    })
    setMyTask(filteredTasks)
}
    const allDeleteHandler = () => {
        setMyTask([])
    }




    
    return (
        <div>
            {
                myTask.map((oneTask) => {
                    const {id,name} = oneTask

                    return <div className="one-task" key={id}>
                        <h4>{name}</h4>
                        <button onClick={() =>  tasksHandler(id)}>Vymazať</button>
                    </div>
                })
            }
            <button className="mainButton" onClick={allDeleteHandler}>Všetko Vymazať </button>
        </div>
    )
}

export default AllTasks