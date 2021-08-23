import Album from "./Album";
import React, { useEffect, useState } from "react";
import AlbumService from "../../service/AlbumService";
import AlbumTrackService from "../../service/AlbumTrackService";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fondo: {
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 0%, rgba(0,0,0,1) 100%)',
        width: '100%',
        height: '100%',
        paddingTop: '1.5rem',
    },
});

export default function ArtistProfile({ params }) {
    const classes = useStyles();
    const { id } = params;
    const [album, setAlbum] = useState();
    const [albumTrack, setAlbumTrack] = useState();

    useEffect(function () {
        AlbumService(id).then((responseAlbum) => setAlbum(responseAlbum));
    }, [id]);

    useEffect(function () {
        AlbumTrackService(id).then((responseAlbumTrack) => setAlbumTrack(responseAlbumTrack));
    }, [id]);

    return (
        <div className = {classes.fondo}>
            {
                album && albumTrack &&
                <div className = {classes.fondo}>
                    {console.log(album)}
                    {console.log(albumTrack)}
                    {
                        <Album
                            id={album.id}
                            name={album.name}
                            image={album.image}
                            type={album.type}
                            totalTracks={album.totalTracks}
                            albumArtist={album.albumArtist}

                            tracks = {albumTrack}
                        />
                    }
                </div>
            }
        </div>
    );
}