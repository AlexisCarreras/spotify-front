import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ArtistService from "../../service/ArtistService";
import ArtistAlbumService from "../../service/ArtistAlbumService";
import ArtistTopTrack from "../../service/ArtistTopTrack";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

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
    height: '140vh',
    marginTop: '40rem',
  },
  tittleTopTrack: {
    margin: 0,
    fontSize: '25px',
    color: '#FFFF',
    display: 'flex',
    paddingTop: '8rem',
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
    marginRight: '3.5rem',
  },
  imgAlbum: {
    width: '200px',
    height: '200px'
  },
  nameAlbum: {
    fontSize: '18px',
    color: '#FFFF',
  },
  buttonAlbum: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
});

export default function ArtistProfile({params}) {
  const classes = useStyle(); 
  const { id } = params;

  const [artist, setArtist] = useState();
  const [artistAlbum, setArtistAlbum] = useState();
  const [artistTopTrack, setArtistTopTrack] = useState();
  const [paginacion, setPaginacion] = useState(0);

  useEffect(function () {
    ArtistService(id).then((responseArtist) => setArtist(responseArtist));
  }, [id]);

  useEffect(function () {
    ArtistAlbumService(id, paginacion).then((responseArtistAlbum) => setArtistAlbum(responseArtistAlbum));
  }, [id, paginacion]);

  useEffect(function () {
    ArtistTopTrack(id).then((responseArtistTopTrack) => setArtistTopTrack(responseArtistTopTrack));
  }, [id]);

  //Boton (flecha) para ver los anteriores
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
              <IconButton onClick={() => setPaginacion(paginacion - 5)} className={classes.buttonAlbum} color="secondary" aria-label="arrow netx">
                  <ArrowBackIosIcon />
               </IconButton>
  }

  const nameSlice = (name, cantidad) => {
    if (name.length > cantidad) {
        var nombre = name.substring(0,cantidad)
        return nombre + "..."
    }
    return name;
}

  return (
    <div>
      {
        artist && artistAlbum && artistTopTrack &&
        <div className={classes.root} key={id}>
          {console.log(artistTopTrack)}
            <section>
              <div className={classes.section1}>
                <img src={artist.image} className={classes.imgFondo} alt="fondo-perfil"></img>
                <img src={artist.image} className={classes.imgFondo} alt="fondo-perfil"></img>
              </div>

              <div className={classes.section2}>
                <img src={artist.image} className={classes.imgPerfil} alt="foto-perfil"></img>
                <h1 className={classes.name}>{artist.name}</h1>
              </div>
            </section>

            <section className={classes.fondo}>
              <div>
                <h3 className={classes.tittleTopTrack}>Top Tracks:</h3>
                <div className={classes.contentTopTrack}>
                  {<ul>
                    <h6 className={classes.listaTitulos}>TITULO</h6>
                    {artistTopTrack.map(({name, id}) => 
                    <li className={classes.listaTopTrack} key={id} title={name}>{nameSlice(name, 30)}</li>)}
                  </ul>}
                  {<ul>
                    <h6 className={classes.listaTitulos}>ARTISTA</h6>
                    {artistTopTrack.map((a) => 
                    <li className={classes.listaTopTrack} key={a.id} title={artist.name}>{nameSlice(artist.name, 30)}</li>)}
                  </ul>}
                  {<ul>
                    <h6 className={classes.listaTitulos}>ALBUM</h6>
                    {artistTopTrack.map((a) => 
                    <li className={classes.listaTopTrack} key={a.id} title={a.albumName}>{nameSlice(a.albumName, 30)}</li>)}
                  </ul>}
                  {<ul>
                    <h6 className={classes.listaTitulos}>DUR.</h6>
                    {artistTopTrack.map((a) => 
                    <li className={classes.listaTopTrack} key={a.id}>{a.trackLength}</li>)}
                  </ul>}
                </div>
              </div>
              <div>
                <h3 className={classes.tittleTopTrack}>Albums:</h3>
                <div className={classes.sectionAlbums}>
                  {backButton}
                  {
                    artistAlbum.map(({name, image, id}) =>
                    <div className={classes.contentAlbums} key={id}>
                      <img
                        src={image}
                        className={classes.imgAlbum} 
                        alt="img-album"
                      />
                      <Typography className={classes.nameAlbum} title={name} variant="body1" gutterBottom>
                      {nameSlice(name, 20)}
                      </Typography>
                    </div>
                    )
                  }
                  <IconButton onClick={() => setPaginacion(paginacion + 5)} className={classes.buttonAlbum} color="secondary" aria-label="arrow netx">
                    <ArrowForwardIosIcon />
                  </IconButton>
                </div>
              </div>
            </section>

        </div>
      }
    </div>
  );
}