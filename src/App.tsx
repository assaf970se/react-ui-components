import React from 'react';
import './App.css';
import { Workspace } from "./Workspace/Workspace";

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

      <Workspace
        handleDrawerToggle={handleDrawerToggle}
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
}

export default App;
