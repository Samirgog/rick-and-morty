import React from 'react'
import classes from './EpisodeCard.module.css'
import {Characters} from "../../Characters/Characters"
import {useSelector} from "react-redux"
import {Loader} from "../../UI/Loader/Loader"

export const EpisodeCard = ({episode, characters}) => {

    const loading = useSelector(state => state.home.loading)
    const charactersLoading = useSelector(state => state.home.charactersLoading)

    return (
        <div className={classes.EpisodeCard}>
            {
                loading
                ? <Loader/>
                : <>
                        <h1>{(Object.keys(episode).length !== 0) &&<strong>Episode {episode.episode.slice(episode.episode.indexOf('E') + 1)} | &nbsp;</strong>}{episode.name}</h1>
                        <small>Date: {episode.air_date}</small>
                        <hr/>
                        <h2>Characters:</h2>
                        {(characters.length !== 0) &&<Characters characters={characters} loading={charactersLoading}/>}
                    </>
            }
        </div>
    )

}
