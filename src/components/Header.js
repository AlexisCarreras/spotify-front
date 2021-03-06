import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AlbumIcon from '@material-ui/icons/Album';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    root: {
        backgroundColor: 'black',
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        zIndex: '2 !important',
    },
    botonMenu:{
        color: 'white',
        '&:hover': {
            color: '#F50057',
        },
        marginLeft: '1rem',
    },
    item: {
        '&:hover': {
            color: '#F50057',
        },
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    titulo: {
        color: 'white',
        marginTop: '0.4rem',
        marginRight: '0.5rem'
    },
    icon: {
        marginRight: '2.5rem'
    },
    link: {
        textDecoration: 'none',
        color: '#777',
    },
});

const Header = () => {
    const classes = useStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className={classes.root}>
            <IconButton onClick={handleClick} className={classes.botonMenu} aria-label="menu">
                <MenuIcon fontSize="large"/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to={`/home`} className={classes.link}>
                    <MenuItem onClick={handleClose} className={classes.item}>Search</MenuItem>
                </Link>
                <Link to={`/favorites`} className={classes.link}>
                    <MenuItem onClick={handleClose} className={classes.item}>Favorites</MenuItem>
                </Link>
                <Link to={`/`} className={classes.link}>
                    <MenuItem onClick={handleClose} className={classes.item}>Cerrar Sesi??n</MenuItem>
                </Link>
            </Menu>

            <div className={classes.logo}>
                <Typography className={classes.titulo} variant="h5" gutterBottom>
                    Featurify
                </Typography>
                <AlbumIcon className={classes.icon} fontSize="large" color="secondary"/>
            </div>
        </div>
    )
}

export default Header;
