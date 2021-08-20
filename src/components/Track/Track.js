import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: '#FFF',
    },
    cabecera: {

    },
    section1: {
        backgroundColor: '#111',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '0 !important',
        position: 'absolute',
    },
    imgFondo:{
        width: '102.43vh',
        height: '94.9vh',
        filter: 'blur(15px) brightness(40%)',
    },

    contentAlbum:{
        zIndex: '1',
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    contentAlbumImg: {
        marginTop: '4rem',
        marginLeft: '3rem',
        display: 'flex',
    },
    albumImg:{
        width: '250px',
        height: '250px',
    },
    contentTrackTittle:{
        marginTop: '6rem',
        marginLeft: '2rem',
        height: '650px',
    },
    name:{
        margin: 0,
        paddingBottom: '1rem',
        fontSize: '35px',
        color: '#fff',
    },
    albumName:{
        margin: 0,
        paddingBottom: '0.6rem',
        fontSize: '25px',
        color: '#fff',
    },
    artistName:{
        margin: 0,
        fontSize: '18px',
        color: '#fff',
    },

    footer: {
        display: 'flex',
        alignItems: 'end',
        marginTop: '4.5rem',
    },
    audio: {
        position: 'relative',
        width: '100%',
        backgroundColor: 'rgb(227, 255, 224)',
    },
});

export default function Album({ id, type, name, albumName, artistName, image, previewUrl, trackLength, favorite, key, mode, tempo, acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence }) {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            {/* <h3>id: {id}</h3> <h3>tipo: {type}</h3> <h3>nombre: {name}</h3> <h3>album: {albumName}</h3> <h3>artist: {artistName}</h3>
            <h3>imagen: {image}</h3> <h3>preview: {previewUrl}</h3> <h3>duracion: {trackLength}</h3> <h3>favorito: {favorite}</h3> <h3>key: {key}</h3>
            <h3>mode: {mode}</h3> <h3>tiempo: {tempo}</h3> <h3>acousticness: {acousticness}</h3> <h3>danceability: {danceability}</h3> <h3>energy: {energy}</h3>
            <h3>instrumentalness: {instrumentalness}</h3> <h3> liveness: {liveness}</h3> <h3>speechiness: {speechiness}</h3> <h3>valence: {valence}</h3> */}
            <section className = {classes.cabecera}>
                <div className={classes.section1}>
                    <img src={image} className={classes.imgFondo} alt={image}></img>
                    <img src={image} className={classes.imgFondo} alt={image}></img>
                </div>

                <article className = {classes.contentAlbum}>
                    <div className = {classes.contentAlbumImg}>
                        <img className = {classes.albumImg} src={image} alt={name}></img>
                    </div>
                    <div className = {classes.contentTrackTittle}>
                        <h2 className = {classes.name}>{name}</h2>
                        <h3 className = {classes.albumName}>{albumName}</h3>
                        <h3 className = {classes.artistName}>{artistName}</h3>
                    </div>
                </article>

                <article>
                    
                </article>
            </section>

            <section className = {classes.footer}>
                <audio className={classes.audio} controls key={id} src={previewUrl}></audio>
            </section>
        </div>
    );
};