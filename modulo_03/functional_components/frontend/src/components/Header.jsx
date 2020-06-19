import React from 'react'

export default function Header({children}) {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{children}</h1>
        </div>
    )
}
