import axios from "axios"
import {
    CHARACTERS_SET_INFO,
    FETCH_CHARACTERS_ERROR,
    FETCH_CHARACTERS_SUCCESS_CHARACTERS_PAGE
} from "./actionTypes"

const baseUrl = 'https://rickandmortyapi.com/api'

export function fetchCharacters(url = '') {
    return async dispatch => {

        try{
            if(!url) url = `${baseUrl}/character`
            const response = await axios.get(url)
            const characters = response.data.results

            dispatch(charactersSetInfo(response.data.info))
            dispatch(fetchCharactersSuccess(characters))
        }catch(e){
            console.log(new Error(e))
            dispatch(fetchCharactersError(e))
        }

    }
}

export function charactersSetInfo(info) {
    return {
        type: CHARACTERS_SET_INFO,
        info
    }
}

export function fetchCharactersSuccess(characters) {
    return {
        type: FETCH_CHARACTERS_SUCCESS_CHARACTERS_PAGE,
        characters
    }
}

export function fetchCharactersError(error) {
    return {
        type: FETCH_CHARACTERS_ERROR,
        error
    }
}
