import React from "react"
import classes from './LocationItem.module.css'

export const LocationItem = ({location}) => {

    return (
        <div className={classes.LocationItem}>
            <i className="fas fa-map-marker-alt"></i>
            <div className={classes.info}>
                <strong>{location.name} | {location.type}</strong> (Dimension: {location.dimension})
            </div>
        </div>
    )
}
