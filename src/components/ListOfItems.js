import React, { useEffect, useState } from "react";
import Home from './Home';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item';
import SearchService from '../service/SearchService';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams } from "react-router-dom";

const useStyle = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    items: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '8.5rem',
    },
    contentButton: {
        display: 'flex',
        marginTop: '8.5rem',
    },
    buttonArtistAlbum: {
        margin: 'auto',
    },

    rootTrack: {
        width: '100%',
        marginTop: '6rem',
    },
    itemsTrack: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        margin: 'auto',
    },
    topButtonTrack: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3.5rem',
    },
    bottomButtonTrack: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
});

export default function ListOfArtists(){
    const classes = useStyle();
    let { keyword, value } = useParams();

    const [item, setItem] = useState([]);
    const [paginacion, setPaginacion] = useState(0);

    useEffect(
        function(){
            SearchService(keyword, value, paginacion).then(item => setItem(item));
        }, 
        [keyword, value, paginacion]
    );
    
    //Boton (flecha) para ver los anteriores resultados de Artist y Album
    let backButton;
    if(paginacion < 5)
    {
        backButton = 
                <IconButton disabled color="secondary" aria-label="arrow netx">
                    <ArrowBackIosIcon />
                </IconButton>
    }
    else if(paginacion >= 5) 
    {
        backButton = 
                <IconButton onClick={() => setPaginacion(paginacion - 5)} className={classes.buttonArtistAlbum} color="secondary" aria-label="arrow netx">
                    <ArrowBackIosIcon />
                 </IconButton>
    }

    //Boton (flecha) para ver los anteriores resultados de Tracks
    let backButtonTrack;
    if(paginacion < 5)
    {
        backButtonTrack = 
                <IconButton disabled color="secondary" aria-label="arrow netx">
                    <ExpandLessIcon fontSize="large" />
                </IconButton>
    }
    else if(paginacion >= 5) 
    {
        backButtonTrack = 
                <IconButton onClick={() => setPaginacion(paginacion - 5)} color="secondary" aria-label="arrow netx">
                    <ExpandLessIcon fontSize="large" />
                 </IconButton>
    }

    if(value==="artist" || value==="album"){
        return (
            <div>
                <Home />
                <div className={classes.root}>
                    <div className={classes.contentButton}>
                        {backButton}
                    </div>
                    <div className={classes.items}>
                        {
                            item.map(({id, type, name_artist, imagen_url, name_album, name_track, track_lenght, favorite}) =>
                            <Item
                                id = {id}
                                type = {type}
                                key = {id}
                                artistName = {name_artist}
                                url = {imagen_url ? imagen_url : null}
                                albumName = {name_album}
                                trackName = {name_track}
                                trackLenght = {track_lenght}
                                favorite = {favorite}
                            />
                            )
                        }
                    </div>
                    <div className={classes.contentButton}>
                        <IconButton onClick={() => setPaginacion(paginacion + 5)} className={classes.buttonArtistAlbum} color="secondary" aria-label="arrow netx">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <Home />
                <div className={classes.rootTrack}>
                    <div className={classes.topButtonTrack}>
                        {backButtonTrack}
                    </div>
                    <div className={classes.itemsTrack}>
                        {
                            item.map(({id, type, name_artist, imagen_url, name_album, name_track, track_lenght, favorite}) =>
                            <Item
                                id = {id}
                                type = {type}
                                key = {id}
                                artistName = {name_artist}
                                url = {imagen_url ? imagen_url : null}
                                albumName = {name_album}
                                trackName = {name_track}
                                trackLenght = {track_lenght}
                                favorite = {favorite}
                            />
                            )
                        }
                    </div>
                    <div className={classes.bottomButtonTrack}>
                        <IconButton onClick={() => setPaginacion(paginacion + 5)} color="secondary" aria-label="arrow netx">
                            <ExpandMoreIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }
}
