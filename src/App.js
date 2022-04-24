import React from "react"

export default function App() {
        
         const [isImportant, setIsImportant] = React.useState(0)
         
         function handleClick() {
             setIsImportant(isImportant + 1)
         }
         
         function handlingClick() {
             setIsImportant(isImportant -1)
         }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={handlingClick}>–</button>
            <div className="counter--count">
                <h1>{isImportant}</h1>
            </div>
            <button className="counter--plus" onClick={handleClick}>+</button>
        </div>
    )
}
