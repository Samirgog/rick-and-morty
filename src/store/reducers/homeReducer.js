import {
    EPISODES_SET_INFO, FETCH_CHARACTERS_BY_IDS_START, FETCH_CHARACTERS_SUCCESS_HOME,
    FETCH_EPISODE_SUCCESS,
    FETCH_EPISODES_ERROR, FETCH_EPISODES_START,
    FETCH_EPISODES_SUCCESS
} from "../actions/actionTypes"

const initialState = {
    info: {},
    seasons: {},
    episode: {},
    characters: [],
    error: null,
    loading: false,
    charactersLoading: false
}

const handlers = {
    [FETCH_EPISODES_START]: (state) => ({...state, loading: true}),
    [FETCH_EPISODES_SUCCESS]: (state, {seasons}) => ({...state, seasons, loading: false}),
    [FETCH_EPISODES_ERROR]: (state, {error}) => ({...state, error}),
    [EPISODES_SET_INFO]: (state, {info}) => ({...state, info}),
    [FETCH_EPISODE_SUCCESS]: (state, {episode}) => ({...state, episode, loading: false}),
    [FETCH_CHARACTERS_BY_IDS_START]: (state) => ({...state, charactersLoading: true}),
    [FETCH_CHARACTERS_SUCCESS_HOME]: (state, {characters}) => ({...state, characters, charactersLoading: false}),
    DEFAULT: state => state
}

export const homeReducer = (state = initialState, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)

}
