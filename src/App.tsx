import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from "./Components/TodoApp/TodoApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoApp />
      </header>
    </div>
  );
}

export default App;
