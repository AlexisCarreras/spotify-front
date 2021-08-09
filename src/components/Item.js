import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '13rem',
        width: '9rem',
        position: 'relative',
        borderRadius: '20px',
        background: 'rgba(85, 85, 85, 0.7)',
        '&:hover': {
            background: 'rgba(34, 34, 34, 0.65)',
        },
    },
    avatarArtist : {
        margin: 'auto',
        marginTop: '1rem',
        width: theme.spacing(12),
        height: theme.spacing(12),
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
        width: theme.spacing(11),
        height: theme.spacing(11),
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

    rootTrack: {
        height: '3rem',
        width: '70%',
        marginBottom: '0.5rem',
        display: 'flex',
        //flexDirection: 'row',
        position: 'relative',
        borderRadius: '20px',
        background: 'rgba(85, 85, 85, 0.7)',
        '&:hover': {
            background: 'rgba(34, 34, 34, 0.65)',
        },
    },
    areaTrack: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    avatarTrack: {
        //margin: 'auto',
        //marginTop: '1rem',
        width: theme.spacing(11),
        height: theme.spacing(11),
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
    starIcon: {
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
    console.log(name, cantidad)
    if (name.length > cantidad) {
        var nombre = name.substring(0,cantidad)
        return nombre + "..."
    }
    return name
}

export default function Item({id, type, url, artistName, albumName, trackName, trackLenght, favorite}){
    const classes = useStyles();

    if (type == "artist") {
        return (
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
        )
    }
    else if (type == "album" || type == "single" || type == "compilation") {
        return (
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
        )
    }
    else if (type == "track") {
        return (
            <Card className={classes.rootTrack} title={trackName}>
                <CardActionArea className={classes.areaTrack}> 
                    <Avatar alt="Track" src={url} variant="square" className={classes.avatarTrack} />
                    <CardContent>
                        <Typography className={classes.nameTrack} variant="caption" component="h2">
                            {trackName}
                        </Typography>
                        <Typography className={classes.nameArtistTrack} variant="caption" component="p">
                            {artistName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea className={classes.area2}>
                        <StarBorderIcon className={classes.starIcon} />
                        <Typography className={classes.duracion} variant="caption" component="p">
                            {trackLenght}
                        </Typography>
                </CardActionArea>
            </Card>
        )
    }
}