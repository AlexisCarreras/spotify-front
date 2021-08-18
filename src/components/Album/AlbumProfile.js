import Album from "./Album";
import React, { useEffect, useState } from "react";
import AlbumService from "../../service/AlbumService";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fondo: {
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 0%, rgba(0,0,0,1) 100%)',
        width: '100%',
        height: '100vh',
        paddingTop: '1.5rem',
    },

});

export default function ArtistProfile({ params }) {
    const classes = useStyles();
    const [album, setAlbum] = useState();
    const { id } = params;

    useEffect(function () {

        AlbumService(id).then((responseAlbum) => setAlbum(responseAlbum));
    }, [id]);

    return (
        <div className = {classes.fondo}>
            {
                album &&
                <div className = {classes.fondo}>
                    {console.log(album)}
                    {
                        <Album
                            id={album.id}
                            type={album.type}
                            name={album.name}
                            image={album.image}
                            totalTracks={album.totalTracks}
                            albumArtist={album.albumArtist}
                            tracks = {album.tracks}
                        />
                    }
                </div>
            }
        </div>
    );
}