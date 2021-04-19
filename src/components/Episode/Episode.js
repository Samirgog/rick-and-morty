import React, {useEffect} from 'react'
import classes from './Episode.module.css'
import {NavLink} from "react-router-dom"
import {EpisodeCard} from "./EpisodeCard/EpisodeCard"
import {useParams} from "react-router"
import {useDispatch, useSelector} from "react-redux"
import {fetchCharactersByIds, fetchEpisodeById} from "../../store/actions/home"

export const Episode = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const episode = useSelector(state => state.home.episode)

    const urls = episode.characters
    const characters = useSelector(state => state.home.characters)

    function getEpisode(id) {
        dispatch(fetchEpisodeById(id))
    }

    function getCharactersByIds(ids){
        dispatch(fetchCharactersByIds(ids))
    }

    function getIdsFromUrls(urls){
        const ids = urls.map(url => +url.slice(url.lastIndexOf('/') + 1))
        return ids
    }

    useEffect(() => {
        getEpisode(id)
    }, [id])

    useEffect(() => {
        if(!!urls && urls.length !== 0) getCharactersByIds(getIdsFromUrls(urls))
    }, [urls])

    return (
            <div className={classes.Episode}>
                <NavLink to="/" className={classes.link}>To Home</NavLink>
                <div className={classes.EpisodeWrapper}>
                    <EpisodeCard episode={episode} characters={characters}/>
                </div>
            </div>
    )
}
