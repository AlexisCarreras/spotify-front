export default function ArtistService(id) {
    const ApiUrl = `https://localhost:44395/api/Track/${id}`
    console.log(ApiUrl)
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => (data)) 
}  