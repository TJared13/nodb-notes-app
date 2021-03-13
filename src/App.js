import React from 'react';
import Header from './components/Header';
import NoteContainer from './components/NoteContainer';
// import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NoteContainer />
    </div>
  );
}

export default App;
