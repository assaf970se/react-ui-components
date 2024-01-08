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
        <div
            style={{
                height: 'calc(100% - 40px)',
                position: 'absolute',
                width: '100%',
                top: '40px',
                left: '0',
                // transform: `scale(${scaleFactor})`,
                // transformOrigin: 'top',
            }}
        >
            <iframe
                src="https://assafse1.wixsite.com/16-bittttts"
                style={{pointerEvents: "none", width: "100%", height: "100%"}}
                // id="preview"
                // allowFullScreen="true"
                // style={{top: "107px", left: "60px", width: "1041px", height: "698px", zIndex: 0, pointerEvents: "none"}}
            >
            </iframe>

            {/*<div style={{height: '100%', width: '100%', backgroundColor: 'red'}}></div>*/}
        </div>
        <Drawer
            isDrawerOpen={isDrawerOpen}
            handleDrawerToggle={handleDrawerToggle}
        />
    </div>
  );
}

export default App;
