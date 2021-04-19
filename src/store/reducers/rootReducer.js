import {combineReducers} from "redux"
import {homeReducer} from "./homeReducer"
import {charactersReducer} from "./charactersReducer"
import {locationsReducer} from "./locationsReducer"

export default combineReducers({
    home: homeReducer,
    characters: charactersReducer,
    locations: locationsReducer
})
