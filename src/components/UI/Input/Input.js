import React, {useState} from "react"
import classes from './Input.module.css'
import {useDispatch} from "react-redux"

export const Input = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const onSubmit = event => {
        if(event.key !== 'Enter') {
            return
        }

        dispatch()

    }

    return (
        <div className={classes.Input}>
            <input
                type="text"
                placeholder="Enter episode title"
                value={value}
                onChange={event => setValue(event.target.value)}
                // onKeyPress={onSubmit}
            />
        </div>
    )
}
