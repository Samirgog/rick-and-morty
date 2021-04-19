import {
    CHARACTERS_SET_INFO,
    FETCH_CHARACTERS_ERROR,
    FETCH_CHARACTERS_SUCCESS_CHARACTERS_PAGE
} from "../actions/actionTypes"


const initialState = {
    info: {},
    characters: [],
    error: null
}

const handlers = {
    [FETCH_CHARACTERS_SUCCESS_CHARACTERS_PAGE]: (state, {characters}) => ({...state, characters}),
    [FETCH_CHARACTERS_ERROR]: (state, {error}) => ({...state, error}),
    [CHARACTERS_SET_INFO]: (state, {info}) => ({...state, info}),
    DEFAULT: state => state
}

export const charactersReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)

}

