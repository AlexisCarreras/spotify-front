import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    album:{
        color: '#fff',
    },
    cabecera:{
        display: 'flex',
    },
    section1: {
        backgroundColor: '#111',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '0 !important',
        position: 'absolute',
    },
    imgFondo:{
        width: '101.54vh',
        height: '85vh',
        filter: 'brightness(10%)',
        background: 'cover',
    },
    contentImg:{

    },
    albumImg:{
        width: '250px',
        height: '250px',
    },
    name:{
        margin: 0,
        fontSize: '90px'
    },
    albumArtist:{
        
    },
    totalTracks:{
        
    },
    
    trackList:{

    },
});

export default function Album({ id, name, image, type, totalTracks, albumArtist, tracks }) {
    const classes = useStyles();
    return (
        <div className = {classes.album}>
            <section className = {classes.cabecera}>
                <div className={classes.section1}>
                    <img src={image} className={classes.imgFondo} alt={image}></img>
                    <img src={image} className={classes.imgFondo} alt={image}></img>
                </div>
                <div className = {classes.contentImg}>
                    <img className = {classes.albumImg} src={image} alt={name}></img>
                </div>
                <h3 className = {classes.name}>{name}</h3>
                <h3 className = {classes.albumArtist}>{albumArtist}</h3>
                <h3 className = {classes.totalTracks}>{totalTracks}</h3>
            </section>
            
            <section className = {classes.trackList}>
                {<ul>
                    {tracks.map((a) => <li>{a.name}</li>)}
                </ul>}
            </section>
            
        </div>

    )
}