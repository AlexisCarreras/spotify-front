
export default function SearchArtist({keyword = "oasis"}) {
    const ApiUrl = `https://localhost:44395/api/search/artist?name=${keyword}`
    const ImgNotFound = "https://coacademy-server-jc.com/uploads/courses/images/890.jpg"
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => {
                let artists = [];
                data.forEach( a =>{
                    const { id, name, images } = a;
                    if(images.length > 0){
                        const imageUrl = images[0].url;
                        artists.push({id, name, url: imageUrl});
                    }
                    else{
                        artists.push({id, name, url:ImgNotFound});
                    }
                    
                    
                })
                //console.log(artists)
                return artists

            });
        
}