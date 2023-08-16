import React from 'react';

const Button = ({ classProps, text }) => {
    return (
        <div>
            <button className={`p-2 rounded-sm border-2 hover:outline-2 bg-slate-200 ${classProps}`}>{text}</button>
        </div>
    );
};

export default Button;