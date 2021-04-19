import React, {useEffect, useState} from 'react'
import classes from './Home.module.css'
import {Input} from "../../components/UI/Input/Input"
import {Season} from "../../components/Season/Season"
import {useDispatch, useSelector} from "react-redux"
import {fetchEpisodeById, fetchEpisodes} from "../../store/actions/home"
import {Loader} from "../../components/UI/Loader/Loader"

export function Home() {

    const dispatch = useDispatch()
    const seasons = useSelector(state => state.home.seasons)
    const info = useSelector(state => state.home.info)
    const loading = useSelector(state => state.home.loading)

    const cls = [
        classes.btn,
        classes.primary
    ]

    function getSeasons(url) {
        dispatch(fetchEpisodes(url))
    }

    useEffect(() => {
        if(!info.prev && !info.next) {
            getSeasons()
        }
    }, [info])

    return (
        <div className={classes.Home}>
            <Input
                // onFilter={episodeTitle => findEpisode()}
            />
            <hr/>
            {
              loading
              ? <Loader/>
              : <>
                  <Season seasons={seasons}/>
                    <div className={classes.buttons}>
                        <button
                            className={cls.join(' ')}
                            disabled={!info.prev}
                            onClick={() => getSeasons(info['prev'])}
                        >Previous</button>
                        <button
                            className={cls.join(' ')}
                            disabled={!info.next}
                            onClick={() => getSeasons(info['next'])}
                        >Next</button>
                    </div>
                  </>
            }

        </div>
    )
}
