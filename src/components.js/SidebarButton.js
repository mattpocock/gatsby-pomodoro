import React from 'react';
import Link from 'gatsby-link';
import './SidebarButton.css';

const SidebarButton = ({ href, title, ...props }) => (
    <a
        href={href}
        target="_blank"
        {...props}
        className="SidebarButton"
    >
        {title}
    </a>
);

export default SidebarButton;
