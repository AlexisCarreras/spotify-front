import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


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
        height: '13rem',
        width: '9rem',
        position: 'relative',
        borderRadius: '20px',
        background: 'rgba(85, 85, 85, 0.7)',
        '&:hover': {
            background: 'rgba(34, 34, 34, 0.65)',
        },
    },
    avatarTrack: {
        margin: 'auto',
        marginTop: '1rem',
        width: theme.spacing(11),
        height: theme.spacing(11),
    },
    nameTrack: {
        color: '#FFFF',
    },
    nameArtistTrack: {
        color: '#FFFF',
    },
}));

const nameSlice = (name, cantidad) => {
    if (name.length > cantidad) {
        var nombre = name.substring(0,cantidad)
        return nombre + "..."
    }
    console.log(nombre)

    return name
}

export default function Item({id, type, name, url, artistName, albumName, albumArtist}){
    const classes = useStyles();

    if (type == "artist") {
        return (
            <Card className={classes.root} title={name}>
                <CardActionArea>
                    <Avatar className={classes.avatarArtist} alt="Artist" src={url} />
                    <CardContent>
                        <Typography className={classes.nameArtist} variant="body2" component="h2">
                            { nameSlice(name, 30)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
    else if (type == "album" || type == "single" || type == "compilation") {
        return (
            <Card className={classes.root} title={name}>
                <CardActionArea>
                    <Avatar alt="Album" src={url} variant="square" className={classes.avatarAlbum} />
                    <CardContent>
                        <Typography className={classes.nameAlbum} variant="body2" component="h2">
                            { nameSlice(name, 25)}
                        </Typography>
                        <Typography className={classes.nameAlbumArtist} variant="caption" component="p">
                            {albumArtist}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
    else if (type == "track") {
        return (
            <Card className={classes.rootTrack} title={name}>
                <CardActionArea>
                    <Avatar alt="Track" src={url} variant="square" className={classes.avatarTrack} />
                    <CardContent>
                        <Typography className={classes.nameTrack} variant="caption" component="h2">
                            {name}
                        </Typography>
                        <Typography className={classes.nameArtistTrack} variant="caption" component="p">
                            {artistName}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}