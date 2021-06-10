
export default function SearchArtist(keyword, value) {
    const ApiUrl = `https://localhost:44395/api/search/${value}?name=${keyword}`
    console.log(ApiUrl)
    const ImgNotFound = "https://coacademy-server-jc.com/uploads/courses/images/890.jpg"
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => {
                let artists = [];
                data.forEach( a =>{
                    const { id, name, images=null } = a;
                    if(images!=null && images.length > 0){
                        const imageUrl = images[0].url;
                        artists.push({id, name, url: imageUrl});
                    }
                    else{
                        artists.push({id, name, url:ImgNotFound});
                    }
                })
                return artists
            });  
}