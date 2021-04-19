import React, {useEffect} from "react"
import classes from './Locations.module.css'
import {useDispatch, useSelector} from "react-redux"
import {fetchLocations} from "../../store/actions/locations"
import {LocationItem} from "../../components/Location/LocationItem/LocationItem"
import {NavLink} from "react-router-dom"
import {Loader} from "../../components/UI/Loader/Loader"

export const Locations = () => {

    const dispatch = useDispatch()
    const locations = useSelector(state => state.locations.locations)
    const info = useSelector(state => state.locations.info)
    const loading = useSelector(state => state.locations.loading)

    const cls = [
        classes.btn,
        classes.primary
    ]

    function getLocations(url) {
        dispatch(fetchLocations(url))
    }

    useEffect(() => {
        if(!info.prev && !info.next) {
            getLocations()
        }
    }, [info])

    if(loading) return (<div className={classes.Locations}><Loader/></div>)

    return (
        <div className={classes.Locations}>
            {
                locations.map(location => {
                    return (
                        <NavLink to={`/location/${location.id}`}><LocationItem key={location.id} location={location}/></NavLink>
                    )
                })
            }
            <div className={classes.buttons}>
                <button
                    className={cls.join(' ')}
                    disabled={!info.prev}
                    onClick={() => getLocations(info['prev'])}
                >Previous</button>
                <button
                    className={cls.join(' ')}
                    disabled={!info.next}
                    onClick={() => getLocations(info['next'])}
                >Next</button>
            </div>
        </div>
    )
}
