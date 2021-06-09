import React, { useEffect, useState } from "react";
import Artist from './Artist';
import SearchArtist from '../service/SearchArtist';


export default function ListOfArtists( { params } ){
    const { keyword, value } = params;

    console.log(params)

    const [artist, setArtist] = useState([]);

    useEffect(
        function(){
            SearchArtist({keyword}, {value}).then(artist => setArtist(artist));
        }, 
        [keyword, value]
    );
    
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
