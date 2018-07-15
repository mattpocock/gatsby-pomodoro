import React from 'react';

const PomodoroState = ({ className, title, rules, children }) => (
    <div className={className}>
        <span className="Title">{title}</span>
        <ul className="Rules">
            {rules.map((rule, index) => <li key={index}>{rule}</li>)}
        </ul>
        {children}
    </div>
);

export default PomodoroState;
