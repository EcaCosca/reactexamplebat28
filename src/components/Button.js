import React from 'react'

export default function Button({name}){
    return (
        <div>
            <button onClick={() => alert('HEY '+name+"!")}>Hey {name}!</button>
        </div>
    )
}