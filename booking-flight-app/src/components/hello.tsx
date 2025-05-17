import React from 'react';

type HelloProps = {
    name: string;
};

const Hello: React.FC<HelloProps> = ({ name }) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>This is using React + TypeScript</p>
        </div>
    )
}

export default Hello;