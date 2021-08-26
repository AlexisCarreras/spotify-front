import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FavoritesService from "../../service/Favorites/FavoritesService";
import Favorites from './Favorites';

const useStyle = makeStyles({
    root: {
        margin: 0,
        paddingTop: '1rem',
    },
})

export default function FavoritesProfile() {
    const classes = useStyle(); 

    const [favorites, setFavorites] = useState();

    useEffect(function () {
        FavoritesService().then((responseFavorites) => setFavorites(responseFavorites));
      }, []);

    return(
        <div className={classes.root}>
            {
                favorites &&
                <div className={classes.root}>

                    {
                        favorites.tracks.map(({id, albumIdSpotify, trackIdSpotify, artistIdSpotify, trackName}) =>
                        <Favorites
                                id = {id}
                                albumIdSpotify = {albumIdSpotify}
                                trackIdSpotify = {trackIdSpotify}
                                artistIdSpotify = {artistIdSpotify}
                                trackName = {trackName}
                        />
                        )
                    }
                </div>
            }
        </div>
    );
};

