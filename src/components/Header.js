import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AlbumIcon from '@material-ui/icons/Album';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
    root: {
        backgroundColor: 'black',
        height: '3rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    titulo: {
        color: 'white',
        marginTop: '0.4rem',
        marginRight: '0.5rem'
    },
    icon: {
        marginRight: '2.5rem'
    }
});

const Header = () => {
const classes = useStyle();

    return(
        <div className={classes.root}>
            <Typography className={classes.titulo} variant="h5" gutterBottom>
                Featurify
            </Typography>
            <AlbumIcon className={classes.icon} fontSize="large" color="secondary"/>
        </div>
    )
}

export default Header;
