import React, { useEffect, useState } from "react";
import Artist from './Artist';
import SearchArtist from '../service/SearchArtist';

export default function ListOfArtists({ params = "Oasis"}){
    const { keyword } = params;
    const [artist, setArtist] = useState([]);

    useEffect(
        function(){
            SearchArtist({keyword}).then(artist => setArtist(artist));
        }, 
        [keyword]
    );
    
    console.log(artist)

    return <div>
        {
            artist.map(({id, name, url}) =>
            <Artist
                id = {id}
                key = {id}
                name = {name}
                url = {url} />
                )
        }
    </div>
}
