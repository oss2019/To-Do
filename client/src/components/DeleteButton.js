import React, {useEffect, useState} from 'react'
import classes from './DeleteButton.module.css'

const DeleteButton = (props) => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem("todos")); 
        setNotes(items)

    }, [])
    console.log(notes)
    
    const handleClickOnDelBtn = ()=>{
        const newNotes = notes.filter((note)=>{
            return note != props.title
        })
        console.log(newNotes)
        // localStorage.clear();
        localStorage.setItem('todos', JSON.stringify(newNotes))
    }
    
  return (
    <div onClick={handleClickOnDelBtn} >
        <svg className={`bi bi-trash ${classes.delBtn}`} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
    </div>
  )
}

export default DeleteButton