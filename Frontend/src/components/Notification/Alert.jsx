import React from 'react';

const Alert = ({ message, type }) => {
const alertStyles = {
        success: 'bg-green-100 border-green-400 text-green-700',
        error: 'bg-red-100 border-red-400 text-red-700',
};
return (
        <div className={`border-l-4 p-4 ${alertStyles[type]} rounded`} role="alert">
            <p>{message}</p>
        </div>
    );
}

export default Alert;