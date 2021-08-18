import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    name:{
        margin: 0,
        fontSize: '90px'
    },
    album:{
        color: '#fff',
    },
    cabecera:{
        display: 'flex',
    },
    albumImg:{
        width: '250px',
        height: '250px',
    },
    trackList:{

    },
    contentImg:{

    },
    albumArtist:{

    },
    totalTracks:{
        
    }

});

export default function Album({ id, name, image, type, totalTracks, albumArtist, tracks }) {
    const classes = useStyles();
    return (
        <div className = {classes.album}>
            <section className = {classes.cabecera}>
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