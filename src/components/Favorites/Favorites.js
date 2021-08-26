// import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
    },
})


export default function Favorites({id, albumIdSpotify, trackIdSpotify, artistIdSpotify, trackName}) {
    const classes = useStyle(); 

    console.log("aadf"+id)

    return(
        <div className={classes.root}>
            <h3>{id}</h3>
            <h3>{albumIdSpotify}</h3>
            <h3>{trackIdSpotify}</h3>
            <h3>{artistIdSpotify}</h3>
            <h3>{trackName}</h3>
        </div>
    );
}