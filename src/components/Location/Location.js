import React, {useEffect} from "react"
import classes from './Location.module.css'
import {NavLink, useHistory} from "react-router-dom"
import {LocationCard} from "./LocationCard/LocationCard"
import {useParams} from "react-router"
import {useDispatch, useSelector} from "react-redux"
import {fetchLocationById, fetchResidentsByIds} from "../../store/actions/locations"

export const Location = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useSelector(state => state.locations.location)
    const urls = location.residents
    const residents = useSelector(state => state.locations.residents)

    function getLocation(id) {
        dispatch(fetchLocationById(id))
    }

    function getResidentsById(ids){
        dispatch(fetchResidentsByIds(ids))
    }

    function getIdsFromUrls(urls){
        const ids = urls.map(url => +url.slice(url.lastIndexOf('/') + 1))
        return ids
    }

    const goBack = () => {
        history.goBack()
    }

    useEffect(() => {
        getLocation(id)
    }, [id])

    useEffect(() => {
        if(!!urls && urls.length !== 0) getResidentsById(getIdsFromUrls(urls))
    }, [urls])

    return (
        <div className={classes.Location}>
            <span className={classes.link} onClick={goBack}>Back</span>
            <div className={classes.LocationWrapper}>
                <LocationCard location={location} residents={residents}/>
            </div>
        </div>
    )
}
