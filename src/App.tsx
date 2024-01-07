import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Drawer} from "./Drawer/Drawer";

function App() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
  return (
    <div className="App">
      <header className="app-header">
        <p onClick={handleDrawerToggle}>APP Header</p>
      </header>
      <div className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
        <Drawer
            isDrawerOpen={isDrawerOpen}
            handleDrawerToggle={handleDrawerToggle}
        />
    </div>
  );
}

export default App;
