import React, { useEffect, useState } from "react";
import ArtistService from "../../service/ArtistService";
import Artist from "./Artist";

export default function ArtistProfile (){

    const [artist, setArtist] = useState([]);

    useEffect(
        function(){
            ArtistService().then(artist => setArtist(artist));
            //console.log(artist);
        }, 
        []
    );

    return(
        <div>
            <h3>{artist.artist}</h3>
            {console.log(artist)}
            {/* {
                artist.map(({id, name, type, popularity, topTracks, albums}) =>
                <Artist
                    id = {id}
                    type = {type}
                    key = {id}
                    name = {name}
                    popularity = {popularity}
                    topTracks = {topTracks}
                    albums = {albums}
                />
                )
            } */}
        </div>
    )
}