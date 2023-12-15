import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {      // make a copy using spread operator => which means it stores value in array.
            id: items.length,    // length of array
            value: Math.floor(Math.random() * 10) + 1     // it takes random values from 1 to 10.
        }])
    }

  return (
    <div>
       <ul>
        <button onClick={addItem}>Add a number</button>
        {items.map(item => (
            <li key={item.id}>{item.value}</li>
        ))}
       </ul>
    </div>
  )
}

export default HookCounterFour