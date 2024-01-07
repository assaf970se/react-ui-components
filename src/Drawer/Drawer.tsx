import React, {useEffect} from 'react';
import './Drawer.scss';

interface DrawerProps {
    isDrawerOpen: boolean;
    handleDrawerToggle: () => void;
}
export const Drawer = ({isDrawerOpen, handleDrawerToggle}: DrawerProps) => {
    const [drawerHeight, setDrawerHeight] = React.useState('partial');
    // const drawerInputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(isDrawerOpen) {
            setDrawerHeight('partial');
            // drawerInputRef.current?.focus();
        }
    }, [isDrawerOpen]);

    const handleDrawerHeight = () => {
        if (drawerHeight === 'partial') {
            setDrawerHeight('full');
        } else {
            setDrawerHeight('partial');
        }
    }

    return (
        <div className={`drawer ${drawerHeight} ${isDrawerOpen ? 'open' : ''} `}>
            <div className="drawer-header" onClick={handleDrawerHeight}>
                <p>Drawer Header</p>
                <button onClick={handleDrawerToggle}>X</button>
            </div>
            <div className="drawer-body">
                <p>Drawer Body</p>
                <input type="text" value=""/>
            </div>
        </div>
    )
}