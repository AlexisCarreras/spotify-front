import Album from "./Album";
import React, { useEffect, useState } from "react";
import AlbumService from "../../service/AlbumService";

export default function ArtistProfile({ params }) {
    const [album, setAlbum] = useState();
    const { id } = params;

    useEffect(function () {

        AlbumService(id).then((responseAlbum) => setAlbum(responseAlbum));
    }, [id]);

    return (
        <div>
            {
                album &&
                <div>
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