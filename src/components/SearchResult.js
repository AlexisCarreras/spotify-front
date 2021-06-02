import { useState, useEffect} from 'react';
import SearchArtist from '../service/SearchArtist';

// getArtistResult = async (e) => {
//     e.preventDefault();
//     fetch( process.env.REACT_APP_API_SEARCH_ARTIST+"oasis" )  
//         .then (response => response.json())
//         .then (data => console.log(data))

// }



const SearchResult = () => {
    const [artist, setArtist] = useState([]);

    useEffect( 
        function (){
        SearchArtist().then((artist) => setArtist(artist))
    },[])

    console.log(artist)

    return(
        <div>

        </div>
    )
}

export default SearchResult;