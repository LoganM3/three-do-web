import { Input } from 'antd'
import { useState } from 'react'
const {Search} = Input



export default function AddTask({setTaskList}){
    const [task, setTask] = useState('')
    const addTask = () => {
        fetch('https://three-do-api-lm.web.app/tasks',{
            method: 'Post',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({task, done: false})
        })
            .then(results => results.json())
            .then(data => {
                setTaskList(data)
                setTask('')
            })
            .catch(err => console.error(err))
    }
    return(
     
        <Search
        value = {task}
        onChange = {e => setTask(e.target.value)}
        enterButton = "Add"
        size = "Large"
        onSearch={addTask}
        />
        
    )

}