import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import img from '../img/portadas.png'

const useStyles = makeStyles({
    root: {
        
    },
    section1: {
        backgroundColor: '#111',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '0 !important',
        position: 'absolute',
    },
    imgFondo:{
        width: '102.44vh',
        height: '100vh',
        filter: 'blur(4px) brightness(50%)',
    },
    contentAlbum:{
        zIndex: '1',
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    titulo: {
        paddingTop: '10rem',
        color: '#FFF',
        fontSize: '50px',
    },
});

export default function PageNotFound() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.section1}>
                <img src={img} className={classes.imgFondo} alt={img}></img>
                <img src={img} className={classes.imgFondo} alt={img}></img>
            </div>
            <div className = {classes.contentAlbum}>
                <Typography className={classes.titulo} component="h1" variant="h5">
                    Page not Found
                </Typography>
            </div>
        </div>
    );
};