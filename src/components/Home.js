import React from 'react';
import SearchHome from './SearchHome'; 
import SearchResult from './SearchResult';
import img from '../img/fondo.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
        // display: 'flex',
        // justifyContent: 'center',
    },
    img: {
        width: '100%',
        height: '92.6%',
        position: 'absolute', 
    },
});

getArtistResult = async (e) => {
    e.preventDefault();
    fetch( process.env.REACT_APP_API_SEARCH_ARTIST+"oasis" )  
        .then (response => response.json())
        .then (data => console.log(data))

}

const Home = () => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <img src={img} className={classes.img} alt="fondo" />
            <SearchHome />
            <SearchResult />
        </div>
    );
}

export default Home;