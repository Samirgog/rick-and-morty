import React from "react"
import classes from './LocationCard.module.css'
import {Characters} from "../../Characters/Characters"
import {useSelector} from "react-redux"
import {Loader} from "../../UI/Loader/Loader"

export const LocationCard = ({location, residents}) => {

    const loading = useSelector(state => state.locations.loading)

    return (
        <div className={classes.LocationCard}>
            {
                loading
                ? <Loader/>
                : <>
                        <h1>{(Object.keys(location).length !== 0) &&<strong>{location.name} | {location.type}</strong>}</h1>
                        <h3><b>Dimension: </b>{location.dimension}</h3>
                        <hr/>
                        <h2>Residents:</h2>
                        {(residents.length !== 0) &&<Characters characters={residents}/>}
                </>
            }

        </div>
    )
}
