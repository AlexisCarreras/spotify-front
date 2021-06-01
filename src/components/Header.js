import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AlbumIcon from '@material-ui/icons/Album';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
    root: {
        backgroundColor: 'black',
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    }
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
                <MenuItem onClick={handleClose} className={classes.item}>Search</MenuItem>
                <MenuItem onClick={handleClose} className={classes.item}>Favorites</MenuItem>
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
