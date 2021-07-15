import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button'; 
import './App.css';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([])
  const [input, setinput] = useState('')

 

  useEffect(()=>{
    db.collection('todo').orderBy('timeStamp','desc').onSnapshot(onSnapshot=>{
      setTodos(onSnapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})));
    })},[]) 
 const addTodo=(event)=>{
    event.preventDefault();
     db.collection('todo').add({
        todo:input,
        timeStamp:firebase.firestore.FieldValue.serverTimestamp(),  
      })  
      setinput('');
    return setTodos([...todos,input]);
  }
  
  return (
    <div className="App">
      <div className="top">
          <h1>Hey Prabhat, You are on fire🔥🔥!!</h1>  
        {/* <input type="input" value={input} onChange={event=>setinput(event.target.value)}/> */}
        <FormControl>
        <InputLabel htmlFor="my-input">😃Write a Todo</InputLabel>
        <Input id="my-input" type="input" value={input} onChange={event=>setinput(event.target.value)} aria-describedby="my-helper-text"/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">add todo</Button>
      </div>
      
      {/* <button type="submit" className="btn" onClick={addTodos}>Add Todo</button> */}
      <ul>
        {
          todos.map(todo=>(
            <Todo todo={todo}></Todo>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
