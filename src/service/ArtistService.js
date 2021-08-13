export default function ArtistService(id) {
    const ApiUrl = `https://localhost:44395/api/artist/${id}`
    console.log(ApiUrl)
    const ImgNotFound = "https://coacademy-server-jc.com/uploads/courses/images/890.jpg"
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => (data)) 
}   