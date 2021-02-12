import React, { useState } from "react";

function App() {
    
    const [ name, setName ] = useState("");

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <div>
                <label>Type your name:</label>
                <input type="text" onChange={handleChange}/>
            </div>

            
            <p>{name}</p>
        </div>
    )
}

export default App
