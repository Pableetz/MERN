import { useState } from "react";

interface CounterProps {
    initialValue: number;
}

const Counter = ({initialValue}: CounterProps) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + 1);
    }

    const resetcount = () => {
        setCount(initialValue);
    }

    return (
        <div>
            <h1>Vous avez cliquer {count}fois</h1>
            <button onClick={increment}>Incrémenter</button>
            <button onClick={resetcount}>Réinitialiser</button>
            
        </div>
    )
}

export default Counter;