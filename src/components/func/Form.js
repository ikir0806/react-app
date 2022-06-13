import { useState } from 'react'

export const Form = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('gb');

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <>
            <p>Hello, {count}</p>
            <button onClick={handleClick}>click</button>
            <p>Name: {name}</p>
            <input type="text" onChange={handleChange} value={name} />
        </>);
}