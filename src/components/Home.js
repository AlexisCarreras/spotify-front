import React from 'react';
import SearchHome from './SearchHome'; 
import img from '../img/fondo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import SearchArtist from '../service/SearchItems';

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

    fetch('https://localhost:44395/api/search/artist?name=%22oasis%22')
        .then(response => response.json())
        .then(data => {
            // const a = data.map( art => art.images );
            // const b = a.map(imgUrl => imgUrl.url);
            let arr = [];
            data.forEach(function(value){
                //console.log(value.name, value.id, value.images[0].url);
                arr.push({name: value.name, id: value.id, imageUrl: value.images[0].url});
                 
            })
            console.log(arr);
        });

    return (
        <div className={classes.root}>
            <img src={img} className={classes.img} alt="fondo" />
            <SearchHome />
        </div>
    );
}

export default Home;