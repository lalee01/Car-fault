import react from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Homepage from './Component/Homepage/Homepage'
import SinglePostPage from './Component/SinglePostPage/SinglePostPage'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function App() {
    

  return (
            <Homepage />
  );
}

export default App;
