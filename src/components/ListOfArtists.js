import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Artist from './Artist';
import Album from './Album';
import SearchArtist from '../service/SearchArtist';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
    items: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '6rem 5rem 0 5rem',
    },
    contentButton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4rem',
    },
    buttonVolver: {
        padding: '0.5rem 2rem 0.5rem 2rem',
        color: '#FFFF',
        textTransform: 'none',
        background: '#282828',
        border: '1px solid #FFFFFF',
        borderRadius: '25px',
        '&:hover': {
            background: '#4A4A4A',
        },
        marginRight: '1rem',
    },
    buttonVerMas: {
        padding: '0.5rem 2rem 0.5rem 2rem',
        color: '#FFFF',
        textTransform: 'none',
        border: '1px solid #FFFFFF',
        borderRadius: '25px',
        marginLeft: '1rem',
    },
});

export default function ListOfArtists( { params } ){
    const classes = useStyle();
    const { keyword, value } = params;

    console.log(params)

    const [artist, setArtist] = useState([]);

    useEffect(
        function(){
            console.log(keyword, value);
            SearchArtist(keyword, value).then(artist => setArtist(artist));
        }, 
        [keyword, value]
    );

    const comprobarType = () => {
        const type = value;

        if (type == "artist") {
            return (
                artist.map(({id, name, url}) =>
                    <Artist
                        id = {id}
                        key = {id}
                        name = {name}
                        url = {url ? url : null} 
                    />
                )
            )
        }
        else if (type == "album") {
            return (
                artist.map(({id, name, url}) =>
                    <Album
                        id = {id}
                        key = {id}
                        name = {name}
                        url = {url ? url : null} 
                    />
                )
            )
        }
        else if (type == "track") {

        }
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.items}>
                {
                    comprobarType()
                    // artist.map(({id, name, url}) =>
                    // <Artist
                    //     id = {id}
                    //     key = {id}
                    //     name = {name}
                    //     url = {url ? url : null} 
                    // />
                    // )
                }
            </div>
            <div className={classes.contentButton}>
                <Button className={classes.buttonVolver} variant="outlined" >
                        Volver
                </Button>
                <Button className={classes.buttonVerMas} variant="contained" color="secondary">
                    Ver más
                </Button>
            </div>
        </div>
    )
}
