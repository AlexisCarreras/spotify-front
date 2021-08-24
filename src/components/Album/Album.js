import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'wouter';

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
        height: '75vh',
        filter: 'blur(15px) brightness(40%)',
    },
    contentAlbum:{
        zIndex: '1',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    contentAlbumImg: {
        width: '30%',
        height: '650px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    albumImg:{
        width: '360px',
        height: '360px',
    },
    contentAlbumTittle:{
        width: '70%',
        height: '650px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name:{
        margin: 0,
        paddingBottom: '1rem',
        fontSize: '60px',
        color: '#fff',
        cursor: 'default',
        userSelect: 'none',
    },
    albumArtist:{
        margin: 0,
        paddingBottom: '0.6rem',
        fontSize: '30px',
        color: '#fff',
    },
    totalTracks:{
        margin: 0,
        fontSize: '18px',
        color: '#fff',
        cursor: 'default',
        userSelect: 'none',
    },

    trackList:{
        marginTop: '7rem',
        display: 'flex',
        justifyContent: 'center',
    },
    listaTitulos: {
        fontSize: '15px',
        color: '#888',
        listStyle: 'none',
        marginBottom: '2rem',
        cursor: 'default',
        userSelect: 'none',
    },
    listaTopTrack: {
        fontSize: '18px',
        color: '#FFFF',
        marginRight: '4rem',
        listStyle: 'none',
        marginBottom: '1rem',
        height: '50px',
        cursor: 'default',
        userSelect: 'none',
    },
    preview: {
        fontSize: '15px',
        color: '#888',
        marginLeft: '5rem',
        listStyle: 'none',
        marginBottom: '0rem',
        cursor: 'default',
        userSelect: 'none',
    },
    audio: {
        display: 'block',
    	height: '66px',
        margin: 0,
    },
    links: {
        textDecoration: 'none',
        color: '#FFF',
        '&:hover': {
          background: 'rgba(245, 0, 87, 0.8)',
          //textDecoration: 'underline rgba(245, 0, 87, 0.8)',
        },
    },
});

const nameSlice = (name, cantidad) => {
    if (name.length > cantidad) {
        var nombre = name.substring(0,cantidad)
        return nombre + "..."
    }
    return name;
}

export default function Album({ id, name, image, type, totalTracks, albumArtist, tracks }) {
    const classes = useStyles();

    return (
        <div className = {classes.album}>
            <section className = {classes.cabecera}>
                <div className={classes.section1}>
                    <img src={image} className={classes.imgFondo} alt={image}></img>
                    <img src={image} className={classes.imgFondo} alt={image}></img>
                </div>
                <article className = {classes.contentAlbum}>
                    <div className = {classes.contentAlbumImg}>
                        <img className = {classes.albumImg} src={image} alt={name}></img>
                    </div>
                    <div className = {classes.contentAlbumTittle}>
                        <h2 className = {classes.name}>{name}</h2>
                        <h3 className = {classes.albumArtist}>{albumArtist}</h3>
                        <h4 className = {classes.totalTracks}>{totalTracks} songs</h4>
                    </div>
                </article>
            </section>
            
            <section className = {classes.trackList}>
                {<ul>
                    <h6 className={classes.listaTitulos}>TITULO</h6>
                    {tracks.map((a) => 
                    <li className={classes.listaTopTrack} key={a.id} title={a.name}>
                        <Link href={`/profile/track/${a.id}`} className={classes.links}>{nameSlice(a.name, 30)}</Link>
                    </li>)} 
                </ul>}
                {<ul>
                    <h6 className={classes.listaTitulos}>ARTISTA</h6>
                    {tracks.map((a) => 
                    <li className={classes.listaTopTrack} key={a.id} title={albumArtist}>{nameSlice(albumArtist, 30)}</li>)}
                </ul>}
                {<ul>
                    <h6 className={classes.listaTitulos}>ALBUM</h6>
                    {tracks.map((a) => 
                    <li className={classes.listaTopTrack} key={a.id} title={name}>
                        <Link href={`/profile/album/${id}`} className={classes.links}>{nameSlice(name, 30)}</Link>
                    </li>)}
                </ul>}
                {<ul>
                    <h6 className={classes.listaTitulos}>DUR.</h6>
                    {tracks.map((a) => 
                    <li className={classes.listaTopTrack} key={a.id}>{a.trackLength}</li>)}
                </ul>}
                {<ul>
                    <h6 className={classes.preview}>PREVIEW</h6>
                    {tracks.map((a) => 
                    <audio className={classes.audio} controls key={a.id} src={a.previewUrl}></audio>)}
                </ul>}
            </section>
        </div>

    )
}