export default function AlbumService(id) {
    const ApiUrl = `https://localhost:44395/api/album/${id}`
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => (data)) 
}   