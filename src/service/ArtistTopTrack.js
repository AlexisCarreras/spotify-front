export default function ArtistTopTrackService(id) {
    const ApiUrl = `https://localhost:44395/api/Artist/${id}/top-tracks`
    console.log(ApiUrl)
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => data) 
}  