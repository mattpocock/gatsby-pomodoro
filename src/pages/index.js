import React from 'react';
import Link from 'gatsby-link';
import './index.css';
import '../styles/resets.css';

export default () => (
    <div className="Container">
        <Link className="GoButton" to="/go/">
            Start Pomodoro
        </Link>
    </div>
);
