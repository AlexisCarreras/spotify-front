import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TimerIcon from '@material-ui/icons/Timer';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#FFF',
        height: '100vh',
    },
    cabecera: {
        paddingTop: '3rem',
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
    iconoHelp: {
        color: '#FFFF',
    },

    footer: {
        display: 'flex',
        alignItems: 'end',
        marginTop: '8rem',
    },
    audio: {
        position: 'relative',
        width: '100%',

    },
}));
  
  export default function Album({ id, type, name, albumName, artistName, image, previewUrl, trackLength, favorite, nota, mode, tempo, acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence }) {
      const classes = useStyles();

      const nameSlice = (name, cantidad) => {
        if (name.length > cantidad) {
            var nombre = name.substring(0,cantidad)
            return nombre + "..."
        }
        return name;
    }

    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
      setOpen1(true);
    };

    const handleClose1 = () => {
      setOpen1(false);
    };

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
      setOpen2(true);
    };

    const handleClose2 = () => {
      setOpen2(false);
    };

    const [open3, setOpen3] = React.useState(false);

    const handleClickOpen3 = () => {
      setOpen3(true);
    };

    const handleClose3 = () => {
      setOpen3(false);
    };

    const [open4, setOpen4] = React.useState(false);

    const handleClickOpen4 = () => {
      setOpen4(true);
    };

    const handleClose4 = () => {
      setOpen4(false);
    };

    const [open5, setOpen5] = React.useState(false);

    const handleClickOpen5 = () => {
      setOpen5(true);
    };

    const handleClose5 = () => {
      setOpen5(false);
    };

    const [open6, setOpen6] = React.useState(false);

    const handleClickOpen6 = () => {
      setOpen6(true);
    };

    const handleClose6 = () => {
      setOpen6(false);
    };

    const [open7, setOpen7] = React.useState(false);

    const handleClickOpen7 = () => {
      setOpen7(true);
    };

    const handleClose7 = () => {
      setOpen7(false);
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
                                <h2 className = {classes.name} title={name}>{nameSlice(name, 35)}</h2>
                                <h3 className = {classes.trackLength}>{trackLength}</h3>
                                <h3 className = {classes.albumName} title={albumName}>{nameSlice(albumName, 35)}</h3>
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
                                <IconButton className={classes.iconoHelp} onClick={handleClickOpen1} aria-label="HelpOutlineIcon">
                                    <HelpOutlineIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                            <Dialog
                                open={open1}
                                onClose={handleClose1}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Danceability"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    La capacidad de baile describe qué tan adecuada es una pista para bailar en función de una combinación de elementos musicales que incluyen el tempo, la estabilidad del ritmo, la fuerza del ritmo y la regularidad general. Un valor de 0 es menos bailable y 1000 es más bailable.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose1} color="secondary" autoFocus>
                                    Cerrar
                                </Button>
                                </DialogActions>
                            </Dialog>

                            <Slider value={energy} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Energy
                                <IconButton className={classes.iconoHelp} onClick={handleClickOpen2} aria-label="HelpOutlineIcon">
                                    <HelpOutlineIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                            <Dialog
                                open={open2}
                                onClose={handleClose2}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Energy"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    La energía es una medida de 0 a 1000 y representa una medida de percepción de intensidad y actividad. Por lo general, las pistas enérgicas se sienten rápidas y ruidosas. Las características de percepción que contribuyen a este atributo incluyen rango dinámico, volumen percibido, timbre, frecuencia de inicio y entropía general.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose2} color="secondary" autoFocus>
                                    Cerrar
                                </Button>
                                </DialogActions>
                            </Dialog>

                            <Slider value={instrumentalness} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Instrumentalness
                                <IconButton className={classes.iconoHelp} onClick={handleClickOpen3} aria-label="HelpOutlineIcon">
                                    <HelpOutlineIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                            <Dialog
                                open={open3}
                                onClose={handleClose3}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Instrumentalness"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Predice si una pista no contiene voces. Los sonidos “Ooh” y “aah” se tratan como instrumentales en este contexto. Cuanto más cercano esté el valor de instrumentalidad a 1000, mayor será la probabilidad de que la pista no contenga contenido vocal. Los valores superiores a 500 están destinados a representar pistas instrumentales, pero la confianza es mayor a medida que el valor se acerca a 1000.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose3} color="secondary" autoFocus>
                                    Cerrar
                                </Button>
                                </DialogActions>
                            </Dialog>

                            <Slider value={valence} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography variant="h5" id="discrete-slider-always" gutterBottom>
                                Valence
                                <IconButton className={classes.iconoHelp} onClick={handleClickOpen4} aria-label="HelpOutlineIcon">
                                    <HelpOutlineIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                            <Dialog
                                open={open4}
                                onClose={handleClose4}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Valence"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Una medida de 0 a 1000 que describe la positividad musical que transmite una pista. Las pistas con valencia alta suenan más positivas (por ejemplo, feliz, alegre, eufórico), mientras que las pistas con valencia baja suenan más negativas (por ejemplo, triste, deprimido, enojado).
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose4} color="secondary" autoFocus>
                                    Cerrar
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <div className = {classes.features2}>
                            <Slider value={liveness} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Liveness
                                <IconButton className={classes.iconoHelp} onClick={handleClickOpen5} aria-label="HelpOutlineIcon">
                                    <HelpOutlineIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                            <Dialog
                                open={open5}
                                onClose={handleClose5}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Liveness"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Detecta la presencia de una audiencia en la grabación. Los valores de vivacidad más altos representan una mayor probabilidad de que la pista se haya interpretado en vivo. Un valor superior a 800 proporciona una gran probabilidad de que la pista esté en vivo.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose5} color="secondary" autoFocus>
                                    Cerrar
                                </Button>
                                </DialogActions>
                            </Dialog>

                            <Slider value={acousticness} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Acousticness
                                <IconButton className={classes.iconoHelp} onClick={handleClickOpen6} aria-label="HelpOutlineIcon">
                                    <HelpOutlineIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                            <Dialog
                                open={open6}
                                onClose={handleClose6}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Acousticness"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Una medida de confianza de 0 a 1000 de si la pista es acústica. 1000 representa una alta confianza en que la pista es acústica.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose6} color="secondary" autoFocus>
                                    Cerrar
                                </Button>
                                </DialogActions>
                            </Dialog>

                            <Slider value={speechiness} color="secondary" max = "1000" valueLabelDisplay="on" />
                            <Typography className = {classes.nombreFeature} variant="h5" id="discrete-slider-always" gutterBottom>
                                Speechiness
                                <IconButton className={classes.iconoHelp} onClick={handleClickOpen7} aria-label="HelpOutlineIcon">
                                    <HelpOutlineIcon fontSize="small" />
                                </IconButton>
                            </Typography>
                            <Dialog
                                open={open7}
                                onClose={handleClose7}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Speechiness"}</DialogTitle>
                                <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Speechiness detecta la presencia de palabras habladas en una pista. Cuanto más exclusivamente parecida a un discurso sea la grabación más cercano a 1000 será el valor del atributo. <br/>Los valores superiores a 660 describen pistas que probablemente estén compuestas en su totalidad por palabras habladas. <br/>Los valores entre 330 y 660 describen pistas que pueden contener tanto música como voz, ya sea en secciones o en capas, incluidos casos como la música rap. <br/>Los valores por debajo de 330 probablemente representen música y otras pistas que no se parecen al habla.
                                </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose7} color="secondary" autoFocus>
                                    Cerrar
                                </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </article>
                </section>
            </section>

            <section className = {classes.footer}>
                <audio className={classes.audio} controls key={id} src={previewUrl}></audio>
            </section>
        </div>
    );
};