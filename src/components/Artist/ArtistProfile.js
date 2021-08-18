import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ArtistService from "../../service/ArtistService";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyle = makeStyles({
  section1: {
    backgroundColor: '#111',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '0 !important',
    position: 'absolute',
  },
  section2: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '7rem',
  },
  imgFondo:{
    width: '101.54vh',
    height: '85vh',
    filter: 'brightness(10%)',
    background: 'cover',
  },
  imgPerfil: {
    position: 'absolute',
    width: '500px',
    height: '500px',
    borderRadius: '250px',
  },
  name: {
    color: '#FFFF',
    position: 'absolute',
    bottom: '12rem',
    fontSize: '50px',
  },

  fondo: {
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 0%, rgba(0,0,0,1) 100%)',
    height: '250vh',
    marginTop: '40rem',
  },
  tittleTopTrack: {
    margin: 0,
    fontSize: '25px',
    color: '#FFFF',
    display: 'flex',
    paddingTop: '7rem',
    marginBottom: '1rem',
    justifyContent: 'center',
  },
  contentTitulos: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  listaTitulos: {
    fontSize: '15px',
    color: '#888',
    marginLeft: '4rem',
    listStyle: 'none',
    marginBottom: '2rem',
  },
  contentTopTrack: {
    display: 'flex',
    justifyContent: 'center',
  },
  listaTopTrack: {
    fontSize: '18px',
    color: '#FFFF',
    marginLeft: '4rem',
    marginRight: '4rem',
    listStyle: 'none',
    marginBottom: '1rem',
  },
  artistTopTrack: {
    fontSize: '18px',
    color: '#FFFF',
    listStyle: 'none',
    marginBottom: '1rem',
  },

  sectionAlbums: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4rem',

  },
  contentAlbums: {

  },
  imgAlbum: {
    width: '200px',
    height: '200px'
  },
  nameAlbum: {
    fontSize: '18px',
    color: '#FFFF',
  },
});

export default function ArtistProfile({params}) {
  const classes = useStyle(); 
  const { id } = params;

  const [artist, setArtist] = useState();
  
  const [paginacion, setPaginacion] = useState(0);

  useEffect(function () {
      
    ArtistService(id, paginacion).then((responseArtist) => setArtist(responseArtist));
    //console.log(artist);
  }, [id, paginacion]);

  //Boton (flecha) para ver los anteriores resultados de Artist y Album
  let backButton;
  if(paginacion < 5)
  {
      backButton = 
              <IconButton disabled color="secondary" aria-label="arrow netx">
                  <ArrowBackIosIcon />
              </IconButton>
  }
  else if(paginacion >= 5) 
  {
      backButton = 
              <IconButton onClick={() => setPaginacion(paginacion - 5)} className={classes.buttonArtistAlbum} color="secondary" aria-label="arrow netx">
                  <ArrowBackIosIcon />
               </IconButton>
  }

  return (
    <div>
      {
        artist &&
        <div className={classes.root}>
          {console.log(artist)}
            <section>
              <div className={classes.section1}>
                <img src={artist.image} className={classes.imgFondo} alt="fondo-perfil"></img>
                <img src={artist.image} className={classes.imgFondo} alt="fondo-perfil"></img>
              </div>

              <div className={classes.section2}>
                <img src={artist.image} className={classes.imgPerfil} alt="foto-perfil"></img>
                <h1 className={classes.name}>{artist.name}</h1>
                {/*<h3>{artist.id}</h3>
                <h3>{artist.name}</h3>
                <h3>{artist.image}</h3>
                <h3>{artist.type}</h3>
                <h3>{artist.popularity}</h3>
                <h3>{artist.topTracks.map((a) => a.name)}</h3>
                <h3>{artist.albums.map((a) => a.name)}</h3>
                <h3>{artist.albums.map((a) => a.image)}</h3> */}
              </div>
            </section>

            <section className={classes.fondo}>
              <div>
                <h3 className={classes.tittleTopTrack}>Top Tracks:</h3>
                <div className={classes.contentTopTrack}>
                  {<ul>
                    <h6 className={classes.listaTitulos}>TITULO</h6>
                    {artist.topTracks.map((a) => 
                    <li className={classes.listaTopTrack}>{a.name}</li>)}
                  </ul>}
                  {<ul>
                    <h6 className={classes.listaTitulos}>ARTISTA</h6>
                    {artist.topTracks.map((a) => 
                    <li className={classes.listaTopTrack}>{artist.name}</li>)}
                  </ul>}
                  {<ul>
                    <h6 className={classes.listaTitulos}>ALBUM</h6>
                    {artist.topTracks.map((a) => 
                    <li className={classes.listaTopTrack}>{a.albumName}</li>)}
                  </ul>}
                  {<ul>
                    <h6 className={classes.listaTitulos}>DUR.</h6>
                    {artist.topTracks.map((a) => 
                    <li className={classes.listaTopTrack}>{a.trackLength}</li>)}
                  </ul>}
                </div>
              </div>
              <div>
                <h3 className={classes.tittleTopTrack}>Albums:</h3>
                <div className={classes.sectionAlbums}>
                  {
                    artist.albums.map(({name, image}) =>
                    <div className={classes.contentAlbums}>
                      <img
                        src={image}
                        className={classes.imgAlbum} 
                        alt="img-album"
                      />
                      <Typography className={classes.nameAlbum} variant="body1" gutterBottom>
                        {name}
                      </Typography>
                    </div>
                    )
                  }
                </div>
                {backButton}
                <IconButton onClick={() => setPaginacion(paginacion + 5)} className={classes.buttonArtistAlbum} color="secondary" aria-label="arrow netx">
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </section>

        </div>
      }
    </div>
  );
}