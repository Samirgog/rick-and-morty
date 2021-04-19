import React from "react"
import classes from './Characters.module.css'
import {CharacterCard} from "./CharacterCard/CharacterCard"
import {Loader} from "../UI/Loader/Loader"

export const Characters = ({characters, loading = false}) => {
    console.log('characters', characters)
    return (
        <div className={classes.Characters}>
            {
                loading
                ? <Loader/>
                : <div className={classes.row}>
                        {
                            characters.map(character=> (
                                <div className={classes.card}>
                                    <CharacterCard character={character}/>
                                </div>
                            ))
                        }
                    </div>
            }

        </div>
    )
}
