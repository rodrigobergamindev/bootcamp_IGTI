import React from 'react'
import css from './info.module.css'


export default function Info({children}) {
    return (
        <div className={css.info}>
            {children}
        </div>
    )
}
