import React from 'react';
import SearchHome from './SearchHome'; 
import img from '../img/fondo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import SearchArtist from '../service/SearchArtist';


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

const Home = () => {

    const classes = useStyle();

    return (
        <div className={classes.root}>
            <img src={img} className={classes.img} alt="fondo" />
            <SearchHome />
        </div>
    );
}

export default Home;