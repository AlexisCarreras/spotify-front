import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FavoritesService from "../../service/Favorites/FavoritesService";
import Favorites from './Favorites';

const useStyle = makeStyles({
    root: {
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 0%, rgba(0,0,0,1) 100%)',
        width: '100%',
        height: '100%',
        paddingTop: '2rem',
        color: '#FFF'
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
                <div>

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

