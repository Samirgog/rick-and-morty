import {
    FETCH_CHARACTERS_SUCCESS_LOCATIONS, FETCH_LOCATION_START,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATIONS_ERROR,
    FETCH_LOCATIONS_SUCCESS, LOCATIONS_SET_INFO

} from "../actions/actionTypes"


const initialState = {
    info: {},
    locations: [],
    location: {},
    residents: [],
    error: null,
    loading: false
}

const handlers = {
    [FETCH_LOCATION_START]: (state) => ({...state, loading: true}),
    [FETCH_LOCATIONS_SUCCESS]: (state, {locations}) => ({...state, locations, loading: false}),
    [FETCH_LOCATIONS_ERROR]: (state, {error}) => ({...state, error}),
    [LOCATIONS_SET_INFO]: (state, {info}) => ({...state, info}),
    [FETCH_LOCATION_SUCCESS]: (state, {location}) => ({...state, location, loading: false}),
    [FETCH_CHARACTERS_SUCCESS_LOCATIONS]: (state, {residents}) => ({...state, residents}),
    DEFAULT: state => state
}

export const locationsReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)

}
