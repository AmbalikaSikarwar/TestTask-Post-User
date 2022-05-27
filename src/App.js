import './App.css';
import React, { Component } from 'react';
import List from './components/list'
import { Routes, Route } from "react-router-dom"
import Userview from './components/userview';
import Postview from "./components/postview";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={ <List/> } />
    <Route path="/userview/:id" element={ <Userview/> } />
    <Route path="postview/:id" element={<Postview />} />
    </Routes>
    </div>
  );
}

export default App;
