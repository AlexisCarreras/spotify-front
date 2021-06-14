import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        height: '12rem',
        width: '8rem',
        position: 'relative',
        borderRadius: '20px',
        background: 'rgba(85, 85, 85, 0.7)',
        '&:hover': {
            background: 'rgba(34, 34, 34, 0.65)',
        }
    },
    img: {
        margin: 'auto',
        borderRadius: '100%',
        height: '80px',
        width: '80px',
        padding: '0.5rem',
        paddingTop: '1rem',
    },
    name: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
}));

export default function Item({id, name, url, artistName, albumName, albumArtist}){
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt={name}
                height="140"
                image={url}
                title="Contemplative Reptile"
                className={classes.img}
                
                />
                <CardContent>
                    <Typography className={classes.name} variant="body2" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.name} variant="h9" component="p">
                        {albumArtist}
                    </Typography>
                    <Typography className={classes.name} variant="h9" component="p">
                        {artistName}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>



        // <div className={classes.root}>
        //     <img src={url} className={classes.img} alt={name} />
        //     <Typography variant="h6" gutterBottom>
        //         {name}
        //     </Typography> 
        //      <Typography variant="body2" gutterBottom> {id}</Typography> 

        //     <h1>{name}</h1>
        //     <h4>{id}</h4>
        //     <img alt = {name} src={url} />}
        // </div>
    )
}