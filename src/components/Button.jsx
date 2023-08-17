import React from 'react';

const Button = ({ classProps, text, handleSearch }) => {
    return (
        <div>
            <button onClick={handleSearch} className={`p-2 rounded-sm border-2 hover:outline-2 bg-slate-200 ${classProps}`}>{text}</button>
        </div>
    );
};

export default Button;