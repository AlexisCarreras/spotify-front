
export default function SearchItem(keyword, value) {
    const ApiUrl = `https://localhost:44395/api/search/${value}?name=${keyword}`
    console.log(ApiUrl)
    const ImgNotFound = "https://coacademy-server-jc.com/uploads/courses/images/890.jpg"
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => {
                let items = [];
                data.forEach( a =>{
                    const { id, type, name, images=null, artistName=null, albumName=null, albumArtist=null } = a;
                    if(type == "artist"){
                        if(images!=null && images.length > 0){
                            const imageUrl = images[0].url;
                            items.push({type, id, name, url: imageUrl});
                        }
                        else{
                            items.push({type, id, name, url:ImgNotFound});
                        }
                    }
                    else if (type == "album" || type == "single" || type == "compilation"){
                        if(images!=null && images.length > 0){
                            const imageUrl = images[0].url;
                            items.push({type, id, name, url: imageUrl, albumArtist});
                        }
                        else{
                            items.push({type, id, name, url:ImgNotFound, albumArtist});
                        }
                    }
                    else if (type == "track") {
                        if(images!=null && images.length > 0){
                            const imageUrl = images[0].url;
                            items.push({type, id, name, url: imageUrl, albumName, artistName});
                        }
                        else{
                            items.push({type, id, name, url:ImgNotFound, albumName, artistName});
                        }

                    }
                    
                })
                return items
            });  
}   