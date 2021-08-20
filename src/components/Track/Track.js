import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TimerIcon from '@material-ui/icons/Timer';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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
        width: '102.44vh',
        height: '94.9vh',
        filter: 'blur(15px) brightness(40%)',
    },

    articles: {
        display: 'flex',
        width: '100%',
    },
    article1: {
        zIndex: '1',
        position: 'relative',
        height: '500px',
        width: '45%'
    },
    article2: {
        zIndex: '1',
        position: 'relative',
        width: '50%'
    },
    contentAlbum:{
        display: 'flex',
        width: '100%',
        height: '40%',
        position: 'relative',
    },
    contentAlbumImg: {
        marginTop: '6rem',
        marginLeft: '8rem',
        display: 'flex',
    },
    albumImg:{
        width: '350px',
        height: '350px',
    },
    contentTrackTittle:{
        marginTop: '8rem',
        marginLeft: '2rem',
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
    contentAcorde: {
        marginTop: '22rem',
        display: 'flex',
    },
    contentNota: {
        marginLeft: '7.6rem',
        marginRight: '4rem',
    },
    icono: {
        marginLeft: '2rem',
    },
    contentTempo: {

    },
    acorde: {
        margin: 0,
        fontSize: '30px',
        color: '#fff',
    },

    footer: {
        display: 'flex',
        alignItems: 'end',
        marginTop: '19.5rem',
    },
    audio: {
        position: 'relative',
        width: '100%',
        backgroundColor: 'rgb(227, 255, 224)',
    },
});
  
  export default function Album({ id, type, name, albumName, artistName, image, previewUrl, trackLength, favorite, key, mode, tempo, acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence }) {
      const classes = useStyles();
      
      const [value, setValue] = useState(danceability);


    return(
        <div className={classes.root}>
            <section className = {classes.cabecera}>
                <div className={classes.section1}>
                    <img src={image} className={classes.imgFondo} alt={image}></img>
                    <img src={image} className={classes.imgFondo} alt={image}></img>
                </div>

                <section className = {classes.articles}>
                    <article className = {classes.article1}>
                        <div className = {classes.contentAlbum}>
                            <div className = {classes.contentAlbumImg}>
                                <img className = {classes.albumImg} src={image} alt={name}></img>
                            </div>
                            <div className = {classes.contentTrackTittle}>
                                <h2 className = {classes.name}>{name}</h2>
                                <h3 className = {classes.albumName}>{albumName}</h3>
                                <h3 className = {classes.artistName}>{artistName}</h3>
                            </div>
                        </div>
                        <div className = {classes.contentAcorde}>
                            <div className = {classes.contentNota}>
                                <MusicNoteIcon style={{ fontSize: 90 }} className = {classes.icono} />
                                <h3 className = {classes.acorde}>{key} {mode}</h3>
                            </div>
                            <div className = {classes.contentTempo}>
                                <TimerIcon style={{ fontSize: 90 }} className = {classes.icono} />
                                <h3 className = {classes.acorde}>{tempo} BPM</h3>
                            </div>
                        </div>
                    </article>
                    
                    <article className = {classes.article2}>
                        <Typography id="discrete-slider-always" gutterBottom>
                            Speechiness
                        </Typography>
                        <Slider value={speechiness} max = "1000" valueLabelDisplay="on" />

                        <Typography id="discrete-slider-always" gutterBottom>
                            Acousticness
                        </Typography>
                        <Slider value={acousticness} max = "1000" valueLabelDisplay="on" />

                        <Typography id="discrete-slider-always" gutterBottom>
                            Instrumentalness
                        </Typography>
                        <Slider value={instrumentalness} max = "1000" valueLabelDisplay="on" />

                        <Typography id="discrete-slider-always" gutterBottom>
                            Liveness
                        </Typography>
                        <Slider value={liveness} max = "1000" valueLabelDisplay="on" />

                        <Typography id="discrete-slider-always" gutterBottom>
                            Danceability
                        </Typography>
                        <Slider value={danceability} max = "1000" valueLabelDisplay="on" />

                        <Typography id="discrete-slider-always" gutterBottom>
                            Energy
                        </Typography>
                        <Slider value={energy} max = "1000" valueLabelDisplay="on" />

                        <Typography id="discrete-slider-always" gutterBottom>
                            Valence
                        </Typography>
                        <Slider value={valence} max = "1000" valueLabelDisplay="on" />
                        
                        
                    </article>
                </section>
            </section>

            <section className = {classes.footer}>
                <audio className={classes.audio} controls key={id} src={previewUrl}></audio>
            </section>
        </div>
    );
};