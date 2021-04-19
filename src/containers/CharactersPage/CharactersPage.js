import React, {useEffect} from 'react'
import classes from './CharactersPage.module.css'
import {Characters} from "../../components/Characters/Characters"
import {useDispatch, useSelector} from "react-redux"
import {fetchCharacters} from "../../store/actions/characters"

export const CharactersPage = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters.characters)
    const info = useSelector(state => state.characters.info)

    const cls = [
        classes.btn,
        classes.primary
    ]

    function getCharacters(url) {
        dispatch(fetchCharacters(url))
    }

    useEffect(() => {
        if(!info.prev && !info.next) {
            getCharacters()
        }
    }, [info])

    return (
        <div className={classes.CharactersPage}>
            <Characters characters={characters} />
            <div className={classes.buttons}>
                <button
                    className={cls.join(' ')}
                    disabled={!info.prev}
                    onClick={() => getCharacters(info['prev'])}
                >Previous</button>
                <button
                    className={cls.join(' ')}
                    disabled={!info.next}
                    onClick={() => getCharacters(info['next'])}
                >Next</button>
            </div>
        </div>
    )
}
