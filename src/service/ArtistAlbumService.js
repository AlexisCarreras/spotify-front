export default function ArtistAlbumService(id, offset) {
    const ApiUrl = `https://localhost:44395/api/artist/${id}/albums?offset=${offset}`
    console.log(ApiUrl)
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => (data)) 
}  