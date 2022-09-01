import { Input } from 'antd'
import { useState } from 'react'
const {Search} = Input



export default function AddTask({setTasklist}){
    const [task, setTask] = useState('')
    const addTask = () => {
        fetch('http://localhost:5555/tasks',{
            method: 'Post',
            headers:{
                'Content-Type':'application/json',
                'Authorization':token,
            },
            body: JSON.stringify({task, done: false})
        })
            .then(results => results.json())
            .then(data => {
                setTasklist(data)
                setTask('')
            })
            .catch(err => console.error(err))
    }
    return(
     <div className='add-task'>
        <Search
        value = {task}
        onChange = {e => setTask(e.target.value)}
        enterButton = "Add"
        size = "Large"
        onSearch={addTask}
        />
        </div>
        
    )

}