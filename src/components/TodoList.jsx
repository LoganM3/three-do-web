import { useEffect,useState } from "react"
import {List, Alert} from "antd"
import TodoListCard from "./TodoListCard"


export default function TodoList({tasklist, setTasklist, token}){
    const [loading, setLoading] = useState()
    const [error,setError] = useState()
    // call the api and use setTasklist to fill in state....
    useEffect(() => {
        fetch('http://localhost:5555/tasks',{
            headers:{
                "Authorization":token,
            }
        })
        .then(results => results.json())
        .then(tasks => {
            setTasklist(tasks)
            setLoading(false)
            setError('')
        })
        .catch(err => {
            console.error(err)
            setError(err.message)
            setLoading(false)
        })
        
    }, [token,setTasklist,setLoading, setError])

    if(!tasklist){
        return <h2>No task to complete!</h2>
      }
    return(
        <>
        {error &&<Alert
         message="Error"
         description={error}
         type="error"
         showIcon
        />}
     <div className='task-list'>
        <List
          dataSource={tasklist}
          loading={loading}
          renderItem={(item) => (
            <TodoListCard
             key = {item.id} 
            item={item} 
            setLoading={setLoading}
            setTasklist={setTasklist}
            setError={setError}/>
            
          )}
        />
      </div>
        </>
    )
}