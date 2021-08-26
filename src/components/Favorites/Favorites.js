import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FavoritesService from "../../service/Favorites/FavoritesService";

const useStyle = makeStyles({
    root: {
        margin: 0,
        paddingTop: '10rem',
    },
})

export default function ArtistProfile() {
    const classes = useStyle(); 

    const [favorites, setFavorites] = useState();

    useEffect(function () {
        FavoritesService().then((responseFavorites) => setFavorites(responseFavorites));
      }, []);

    return(
        <div className={classes.root}>
            {
                favorites && favorites.length>0 && favorites.map((tracks)=><p>{tracks.id}</p>)
            }
            <h1>PRUEBA</h1>
        </div>
    );
};

