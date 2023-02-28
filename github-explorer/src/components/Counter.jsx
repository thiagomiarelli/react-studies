import { useState } from "react"

export default function Counter(){
    
    let [counter, setCounter] = useState(0)
    const increment = () => {setCounter(counter + 1)}
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    )
}