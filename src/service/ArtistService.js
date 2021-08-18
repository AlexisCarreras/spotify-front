export default function ArtistService(id, offset) {
    const ApiUrl = `https://localhost:44395/api/artist/${id}?offset=${offset}`
    console.log(ApiUrl)
    const ImgNotFound = "https://coacademy-server-jc.com/uploads/courses/images/890.jpg"
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => (data)) 
}   