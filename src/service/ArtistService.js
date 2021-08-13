export default function ArtistService() {
    const ApiUrl = `https://localhost:44395/api/Artist/2DaxqgrOhkeH0fpeiQq2f4`
    console.log(ApiUrl)
    const ImgNotFound = "https://coacademy-server-jc.com/uploads/courses/images/890.jpg"
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => (data)) 
}   