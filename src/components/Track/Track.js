import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TimerIcon from '@material-ui/icons/Timer';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#FFF',
        height: '100vh'
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
        width: '50%'
    },
    article2: {
        zIndex: '1',
        position: 'relative',
        width: '50%',
        marginTop: '8rem',
        display: 'flex',
        justifyContent: 'space-around',
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
        fontSize: '35px',
        color: '#fff',
    },
    trackLength: {
        fontSize: '20px',
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

    features1: {
        width: '30%',
        
    },
    features2: {
        width: '30%',
    },
    slider: {

    },
    nombreFeature: {
        marginBottom: '5rem',
    },
    contenedorInfoFeatures: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '1rem 1rem 1rem 1rem',
        marginTop: '0.5rem',
        marginRight: '12rem',
    },
    appBar: {
        position: 'relative',
      },
      title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },

    footer: {
        display: 'flex',
        alignItems: 'end',
        marginTop: '4rem',
    },
    audio: {
        position: 'relative',
        width: '100%',

    },
}));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  export default function Album({ id, type, name, albumName, artistName, image, previewUrl, trackLength, favorite, nota, mode, tempo, acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence }) {
      const classes = useStyles();

      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

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
                                <h3 className = {classes.trackLength}>{trackLength}</h3>
                                <h3 className = {classes.albumName}>{albumName}</h3>
                                <h3 className = {classes.artistName}>{artistName}</h3>
                            </div>
                        </div>
                        <div className = {classes.contentAcorde}>
                            <div className = {classes.contentNota}>
                                <MusicNoteIcon style={{ fontSize: 90 }} className = {classes.icono} />
                                <h3 className = {classes.acorde}>{nota} {mode}</h3>
                            </div>
                            <div className = {classes.contentTempo}>
                                <TimerIcon style={{ fontSize: 90 }} className = {classes.icono} />
                                <h3 className = {classes.acorde}>{tempo} BPM</h3>
                            </div>
                        </div>
                    </article>
                    
                    <article className = {classes.article2}>
                        <div className = {classes.features1}>
                            <Slider className = {classes.slider} value={danceability} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Danceability
                            </Typography>

                            <Slider value={energy} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Energy
                            </Typography>

                            <Slider value={instrumentalness} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Instrumentalness
                            </Typography>

                            <Slider value={valence} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography variant="h5" id="discrete-slider-always" gutterBottom>
                                Valence
                            </Typography>
                        </div>
                        <div className = {classes.features2}>
                            <Slider value={liveness} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Liveness
                            </Typography>

                            <Slider value={acousticness} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Acousticness
                            </Typography>

                            <Slider value={speechiness} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Speechiness
                            </Typography>
                        </div>
                    </article>
                </section>
                <div className={classes.contenedorInfoFeatures}>
                    <Button className={classes.contenedorInfoFeatures} variant="contained" size="large" color="secondary" onClick={handleClickOpen}>
                        Ver Info de Features
                    </Button>
                    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                        <AppBar color="secondary" className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Features
                            </Typography>
                        </Toolbar>
                        </AppBar>
                        <List>
                            <ListItem>
                                <ListItemText 
                                    primary="Acousticness" 
                                    secondary="Una medida de confianza de 0 a 1000 de si la pista es acústica. 1000 representa una alta confianza en que la pista es acústica." />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText 
                                    primary="Danceability" 
                                    secondary="La capacidad de baile describe qué tan adecuada es una pista para bailar en función de una combinación de elementos musicales que incluyen el tempo, la estabilidad del ritmo, la fuerza del ritmo y la regularidad general. Un valor de 0 es menos bailable y 1000 es más bailable." />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText 
                                    primary="Energy" 
                                    secondary="La energía es una medida de 0 a 1000 y representa una medida de percepción de intensidad y actividad. Por lo general, las pistas enérgicas se sienten rápidas, ruidosas y ruidosas. Las características de percepción que contribuyen a este atributo incluyen rango dinámico, volumen percibido, timbre, frecuencia de inicio y entropía general." />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText 
                                    primary="Instrumentalness" 
                                    secondary="Predice si una pista no contiene voces. Los sonidos “Ooh” y “aah” se tratan como instrumentales en este contexto. Las pistas de rap o de palabra hablada son claramente 'vocales'. Cuanto más cercano esté el valor de instrumentalidad a 1000, mayor será la probabilidad de que la pista no contenga contenido vocal. Los valores superiores a 500 están destinados a representar pistas instrumentales, pero la confianza es mayor a medida que el valor se acerca a 1000." />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText 
                                    primary="Liveness" 
                                    secondary="Detecta la presencia de una audiencia en la grabación. Los valores de vivacidad más altos representan una mayor probabilidad de que la pista se haya interpretado en vivo. Un valor superior a 800 proporciona una gran probabilidad de que la pista esté activa." />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText 
                                    primary="Speechiness" 
                                    secondary="Detecta la presencia de palabras habladas en una pista. Cuanto más exclusivamente parecida a un discurso sea la grabación (por ejemplo, programa de entrevistas, audiolibro, poesía), más cercano a 1000 será el valor del atributo." />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText 
                                    primary="Valence" 
                                    secondary="Una medida de 0 a 1000 que describe la positividad musical que transmite una pista. Las pistas con valencia alta suenan más positivas (por ejemplo, feliz, alegre, eufórico), mientras que las pistas con valencia baja suenan más negativas (por ejemplo, triste, deprimido, enojado)." />
                            </ListItem>
                        </List>
                    </Dialog>
                </div>
            </section>

            <section className = {classes.footer}>
                <audio className={classes.audio} controls key={id} src={previewUrl}></audio>
            </section>
        </div>
    );
};