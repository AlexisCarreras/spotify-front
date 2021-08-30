import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '15rem',
        width: '11rem',
        position: 'relative',
        borderRadius: '20px',
        background: 'rgba(85, 85, 85, 0.7)',
        '&:hover': {
            background: 'rgba(34, 34, 34, 0.65)',
        },
        marginRight: '1rem',
        marginLeft: '1rem',
        boxShadow: '9px 9px 16px',
    },
    avatarArtist : {
        margin: 'auto',
        marginTop: '1rem',
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    img: {
        margin: 'auto',
        borderRadius: '50%',
        height: '100px',
        width: '100px',
        padding: '0.5rem',
    },
    avatarAlbum: {
        margin: 'auto',
        marginTop: '1rem',
        width: theme.spacing(17),
        height: theme.spacing(17),
    },
    nameArtist: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    nameAlbum: {
        color: '#FFFF',
        marginBottom: '0.4rem',
    },
    nameAlbumArtist: {
        color: '#D0D0D0',
        fontWeight: 'bold',
        lineHeight: '14px',
    },
    links: {
        textDecoration: 'none',
    },
    linksTracks: {
        textDecoration: 'none',
        width: '70%',
    },
    rootTrack: {
        height: '4rem',
        marginBottom: '0.8rem',
        display: 'flex',
        position: 'relative',
        borderRadius: '20px',
        background: 'rgba(85, 85, 85, 0.7)',
        '&:hover': {
            background: 'rgba(34, 34, 34, 0.65)',
        },
        boxShadow: '9px 9px 16px',
    },
    areaTrack: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    avatarTrack: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    },
    nameTrack: {
        color: '#FFFF',
        fontSize: '15px',
    },
    nameArtistTrack: {
        color: '#D0D0D0',
        fontWeight: 'bold',
        lineHeight: '14px',
        fontSize: '12px',
    },
    area2: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    favoriteIconFalse: {
        color: 'white',
    },
    duracion: {
        display: 'flex',
        color: '#FFFF',
        marginRight: '2rem',
        marginLeft: '2rem',
    },
}));

const nameSlice = (name, cantidad) => {
    if (name.length > cantidad) {
        var nombre = name.substring(0,cantidad)
        return nombre + "..."
    }
    return name
}


export default function Item({id, type, url, artistName, albumName, trackName, trackLenght, favorite}){
    const classes = useStyles();
    const [open, setOpen] = useState(favorite);
    
    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    let favoriteIcon
    if(open===false){
        favoriteIcon =
            <IconButton onClick={handleOpen} aria-label="iconStart">
                <StarBorderIcon className={classes.favoriteIconFalse} />
            </IconButton>
    }
    else{
        favoriteIcon = 
            <IconButton onClick={handleClose} color="secondary" aria-label="iconStart">
                <StarIcon />
            </IconButton>
    }

    if (type === "artist") {
        return (
            <Link to={`/profile/artist/${id}`} className={classes.links}>
                <Card className={classes.root} title={artistName}>
                    <CardActionArea>
                        <Avatar className={classes.avatarArtist} alt="Artist" src={url} />
                        <CardContent>
                            <Typography className={classes.nameArtist} variant="body2" component="h2">
                                { nameSlice(artistName, 30)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        )
    }
    else if (type === "album" || type === "single" || type === "compilation") {
        return (
            <Link to={`/profile/album/${id}`} className={classes.links}>
                <Card className={classes.root} title={albumName}>
                    <CardActionArea>
                        <Avatar alt="Album" src={url} variant="square" className={classes.avatarAlbum} />
                        <CardContent>
                            <Typography className={classes.nameAlbum} variant="body2" component="h2">
                                { nameSlice(albumName, 25)}
                            </Typography>
                            <Typography className={classes.nameAlbumArtist} variant="caption" component="p">
                                {artistName}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        )
    }
    else if (type === "track") {
        return (
            <Link to={`/profile/track/${id}`} className={classes.linksTracks}>
                <Card className={classes.rootTrack} title={trackName}>
                    <CardActionArea className={classes.areaTrack}> 
                        <Avatar alt="Track" src={url} variant="square" className={classes.avatarTrack} />
                        <CardContent>
                            <Typography className={classes.nameTrack} variant="caption" component="h2">
                                { nameSlice(trackName, 45)}
                            </Typography>
                            <Typography className={classes.nameArtistTrack} variant="caption" component="p">
                                {artistName}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActionArea className={classes.area2}>
                            {favoriteIcon}
                            <Typography className={classes.duracion} variant="caption" component="p">
                                {trackLenght}
                            </Typography>
                    </CardActionArea>
                </Card>
            </Link>
        )
    }
}