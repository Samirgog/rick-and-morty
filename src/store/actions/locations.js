import axios from "axios";
import {
    FETCH_CHARACTERS_SUCCESS_LOCATIONS, FETCH_LOCATION_START,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATIONS_ERROR,
    FETCH_LOCATIONS_SUCCESS, LOCATIONS_SET_INFO

} from "./actionTypes"

const baseUrl = 'https://rickandmortyapi.com/api'

export function fetchLocations(url = '') {
    return async dispatch => {
        dispatch(fetchLocationStart())
        try{
            if(!url) url = `${baseUrl}/location`

            const response = await axios.get(url)

            dispatch(locationSetInfo(response.data.info))
            setTimeout(() => {
                dispatch(fetchLocationsSuccess(response.data.results))
            }, 500)

        }catch(e) {
            dispatch(fetchLocationsError(e))
        }
    }
}

export function fetchLocationById(id){
    return async dispatch => {
        dispatch(fetchLocationStart())
        try{
            const response = await axios.get(`${baseUrl}/location/${id}`)
            const episode = response.data

            setTimeout(() => {
                dispatch(fetchLocationSuccess(episode))
            }, 1000)
        }catch(e) {
            dispatch(fetchLocationsError(e))
        }
    }
}

export function fetchResidentsByIds(ids){
    return async dispatch => {

        try{
            const response = await axios.get(`${baseUrl}/character/${ids}`)
            let residents = response.data

            if(!Array.isArray(response.data)){
                residents = []
                residents.push(response.data)
            }

            dispatch(fetchResidentsSuccess(residents))
        }catch(e){
            dispatch(fetchLocationsError(e))
        }
    }
}

export function fetchLocationStart() {
    return {
        type: FETCH_LOCATION_START
    }
}

export function fetchLocationsSuccess(locations) {
    return {
        type: FETCH_LOCATIONS_SUCCESS,
        locations
    }
}

export function fetchLocationsError(error){
    return {
        type: FETCH_LOCATIONS_ERROR,
        error
    }
}

export function locationSetInfo(info) {
    return {
        type: LOCATIONS_SET_INFO,
        info
    }
}

export function fetchLocationSuccess(location){
    return {
        type: FETCH_LOCATION_SUCCESS,
        location
    }
}

export function fetchResidentsSuccess(residents) {
    return {
        type: FETCH_CHARACTERS_SUCCESS_LOCATIONS,
        residents
    }
}
