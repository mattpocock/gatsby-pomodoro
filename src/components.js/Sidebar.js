import React from 'react';
import './Sidebar.css';

const Sidebar = ({ children, ...props }) => (
    <div className="Sidebar" {...props}>
        {children}
    </div>
);

export default Sidebar;
