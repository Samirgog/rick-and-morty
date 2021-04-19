import axios from "axios"
import {
    EPISODES_SET_INFO, FETCH_CHARACTERS_BY_IDS_START,
    FETCH_CHARACTERS_SUCCESS_HOME,
    FETCH_EPISODE_SUCCESS,
    FETCH_EPISODES_ERROR, FETCH_EPISODES_START,
    FETCH_EPISODES_SUCCESS
} from "./actionTypes"

const baseUrl = 'https://rickandmortyapi.com/api'

export function fetchEpisodes(url = '') {
    return async dispatch => {
        dispatch(fetchEpisodesStart())
        try{
            if(!url) url = `${baseUrl}/episode`

            const response = await axios.get(url)
            const seasons = mapResultsToSeasons(response.data.results)

            dispatch(episodesSetInfo(response.data.info))
            setTimeout(() => {
                dispatch(fetchEpisodesSuccess(seasons))
            }, 500)

        }catch(e) {
            dispatch(fetchEpisodesError(e))
        }
    }
}

export function fetchEpisodeById(id){
    return async dispatch => {
        dispatch(fetchEpisodesStart())
        try{
            const response = await axios.get(`${baseUrl}/episode/${id}`)
            const episode = response.data
            setTimeout(() => {
                dispatch(fetchEpisodeSuccess(episode))
            }, 1000)
        }catch(e) {
            dispatch(fetchEpisodesError(e))
        }
    }
}

export function fetchCharactersByIds(ids){
    return async dispatch => {
        dispatch(fetchCharactersByIdsStart())
        try{
            const response = await axios.get(`${baseUrl}/character/${ids}`)
            const characters = response.data

            dispatch(fetchCharactersSuccess(characters))
        }catch(e){
            console.log(new Error(e))
            dispatch(fetchEpisodesError(e))
        }
    }
}

export function fetchEpisodesStart(){
    return {
        type: FETCH_EPISODES_START
    }
}

export function fetchEpisodesSuccess(seasons) {
    return {
        type: FETCH_EPISODES_SUCCESS,
        seasons
    }
}

export function fetchEpisodesError(error){
    return {
        type: FETCH_EPISODES_ERROR,
        error
    }
}

export function episodesSetInfo(info) {
    return {
        type: EPISODES_SET_INFO,
        info
    }
}

export function fetchEpisodeSuccess(episode){
    return {
        type: FETCH_EPISODE_SUCCESS,
        episode
    }
}

export function fetchCharactersByIdsStart() {
    return {
        type: FETCH_CHARACTERS_BY_IDS_START
    }
}

export function fetchCharactersSuccess(characters) {
    return {
        type: FETCH_CHARACTERS_SUCCESS_HOME,
        characters
    }
}

function mapResultsToSeasons(results) {
    const seasonsNumberSet = new Set()
    const seasons = {}

    results.forEach(result => {
        seasonsNumberSet.add(result.episode.slice(0, result.episode.indexOf('E')))
    })

    seasonsNumberSet.forEach(item => {
        const key = item.replace('S', 'Season ')
        seasons[key] = results.filter(result => result.episode.indexOf(item) !== -1)
    })

    return seasons
}
