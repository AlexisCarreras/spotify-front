export default function SearchArtist( keyword="oasis" ){

    return(
        fetch( process.env.REACT_APP_API_SEARCH_ARTIST+"oasis" )  
        .then (response => response.json())
        .then (data => console.log(data))

    )

}