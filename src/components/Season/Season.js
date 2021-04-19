import React from "react"
import classes from './Season.module.css'
import {NavLink} from "react-router-dom"

export const Season = ({seasons}) => {

    return (
        <div className={classes.Season}>
            {
                Object.keys(seasons).map(key => {
                    return (
                        <>
                        <h1 key={key}>{key}</h1>
                        <div className={classes.list}>
                            <ul>
                                {
                                    seasons[key].map(episode => (
                                        <li key={episode.id}>
                                            <NavLink to={'/episode/' + episode.id} activeClassName={classes.active}>
                                                Episode {episode.episode.slice(episode.episode.indexOf('E') + 1)} | <strong>{episode.name}</strong>
                                                &nbsp;<small>{episode.air_date}</small>
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}
