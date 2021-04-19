import React from "react"
import './List.module.css'

export const List = (items) => (
    <ul>
        {
            items.map(item => (
                <li key={item}>{item}</li>
            ))
        }
    </ul>
)

