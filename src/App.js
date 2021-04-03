import React, { Component } from 'react'
import {useState} from 'react'
import './App.css';
import Search from './components/Search';
import MovieList from "./components/MovieList";
import {Data} from "./components/Data";
import AddMovie from "./components/AddMovie";

function App()  {
  
const [movies ,  SetMovies] =useState(Data)
const [keyTitle, setKeyTitle] = useState("");
const [keyRate, setKeyRate] = useState(1);
const addMovie = (newMovie) => SetMovies([...movies, newMovie]);
const deleteMovie = (id) => SetMovies(movies.filter((el) => el.id !== id));
 
    return (
      
      < div className="container">
        <h1 className="title" > Movie APP</h1>
        <Search setKeyTitle={setKeyTitle} setKeyRate={setKeyRate}/>
         
        <br/>
        <br/>
      
        <MovieList  deleteMovie={deleteMovie} 
          movies={movies.filter((el) => el.title.toLowerCase().includes(keyTitle.toLowerCase()) && el.rate >= keyRate)}/>
        <AddMovie addMovie={addMovie} />
      </div>
      
    )
  }


export default App;


