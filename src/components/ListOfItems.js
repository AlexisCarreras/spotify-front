import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item';
import SearchItems from '../service/SearchItems';
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

    const [item, setItem] = useState([]);

    useEffect(
        function(){
            console.log(keyword, value);
            SearchItems(keyword, value).then(item => setItem(item));
        }, 
        [keyword, value]
    );
    
    return (
        <div className={classes.root}>
            <div className={classes.items}>
                {
                    item.map(({id, type, name, url, artistName, albumName, albumArtist}) =>
                    <Item
                        id = {id}
                        type = {type}
                        key = {id}
                        name = {name}
                        url = {url ? url : null} 
                        artistName = {artistName}
                        albumName = {albumName}
                        albumArtist = {albumArtist}
                    />
                    )
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
