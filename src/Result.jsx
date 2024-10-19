import React from 'react';

const Result = ({ score, total }) => {
    return (
        <div>
            <h2 className='score'>Your Score: {score} / {total}</h2>
        </div>
    );
};

export default Result;