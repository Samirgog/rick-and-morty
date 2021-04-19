import React from "react"
import classes from './CharacterCard.module.css'
import {NavLink} from "react-router-dom"

export const CharacterCard = ({character}) => {
    if(!character) return null

    const {image, name, status, species, type, gender, origin, location} = character

    return (
        <div className={classes.CharacterCard}>
            <img src={image} style={{width: '100%'}} alt={name}/>
            <div className={classes.description}>
                <h4>Name: {name}</h4>
                <ul>
                    <li><b>Status: </b>{status}</li>
                    <li><b>Species: </b>{species}</li>
                    <li><b>Type: </b>{type}</li>
                    <li><b>Gender: </b>{gender}</li>
                    <li><b>Origin: </b><NavLink to={`/location/${origin.url.slice(origin.url.lastIndexOf('/') + 1)}`}>{origin.name}</NavLink></li>
                    <li><b>Location: </b><NavLink to={`/location/${location.url.slice(location.url.lastIndexOf('/') + 1)}`}>{location.name}</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
