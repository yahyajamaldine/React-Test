import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Posts from './components/pages/Posts';


function App() {
  return (
      <div className="App">
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/Login" element={<Login/> } />
          <Route path="/Posts" element={<Posts/>} />
        </Routes>
       </div>
  );
}

export default App;
