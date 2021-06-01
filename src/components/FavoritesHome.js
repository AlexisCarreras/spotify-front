import React from 'react';
import img from '../img/favorites.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyle = makeStyles({
    root: {
        position: 'absolute',
        marginTop: '12rem',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    divImg: {
        marginTop: '1.3rem',
    },
    img: {
        width: '10rem',
    },
    divList: {
        marginTop: '0.6rem',
        marginRight: '20rem',
    },
    list: {
        color: 'white',
    },
    track: {
        paddingBottom: '10px',
        textShadow: '1px 1px 1px black',
        '&:hover': {
            color: '#F50057',
            textShadow: 'none',
        }
    },
    divBoton: {
        display: 'flex',
        alignItems: 'flex-end',
        marginRight: '2rem',
    },
});

const FavoritesHome = () => {
    const classes = useStyle();

    return(
        <div className={classes.root}>
            <article className={classes.divImg}>
                <img src={img} className={classes.img} alt="Imagen de favoritos"/>
            </article>

            <article className={classes.divList}>
                <ol className={classes.list}>
                    <li className={classes.track}>Wonderwall</li>
                    <li className={classes.track}>Don't Look Back in Anger</li>
                    <li className={classes.track}>Stop Crying Your Heart Out</li>
                    <li className={classes.track}>Live Forever</li>
                    <li className={classes.track}>Wonderwall</li>
                </ol>
            </article>

            <article className={classes.divBoton}>
                <Button variant="contained" color="secondary">
                    See More
                </Button>
            </article>
        </div>
    )
}

export default FavoritesHome;