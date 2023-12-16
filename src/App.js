import React from "react";
import { useState ,useEffect} from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
function App() {    
    const[notes,setNotes]=useState([]);
    const[searchText,setSearchText]=useState('');
    const addNote=(text)=>{
       const date=new Date();
       const newNote={
         id: nanoid(),
         text:text,
         date:date.toLocaleDateString(),
       };
       const newNotes=[...notes,newNote]; 
       setNotes(newNotes);
    };
    const deletenote=(id)=>{
      const newNotes=notes.filter((note)=>note.id!==id);
      setNotes(newNotes);
    };
    const [darkMode,setDarkMode]=useState(false);
    useEffect(()=>{
      const savedNotes = JSON.parse(
        localStorage.getItem('daily_task-data')
      );
      if(savedNotes){
        setNotes(savedNotes);
      }
    },[]);
    useEffect(()=>{
      localStorage.setItem(
        'daily_task-data',
        JSON.stringify(notes)
      );
    },[notes]);
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="App">
      <Header handleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote} 
      handleDeleteNote={deletenote}/>
      </div>
    </div>
  );
}

export default App;
