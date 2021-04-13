import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "./Components/TodoForm/TodoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
