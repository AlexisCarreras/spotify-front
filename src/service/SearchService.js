
export default function SearchItem(keyword, value, offset) {
    const ApiUrl = `https://localhost:44395/api/search/${value}?name=${keyword}&offset=${offset}`
    //console.log(ApiUrl)
    const ImgNotFound = "https://coacademy-server-jc.com/uploads/courses/images/890.jpg"
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => {
                let items = [];
                data.forEach( a =>{
                    const { id, type, name_artist, imagen_url=null, name_album, name_track, track_lenght, favorite } = a;
                    if(type == "artist"){
                        if(imagen_url!=null && imagen_url.length > 0){
                            items.push({type, id, name_artist, imagen_url});
                        }
                        else{
                            items.push({type, id, name_artist, url:ImgNotFound});
                        }
                    }
                    else if (type == "album" || type == "single" || type == "compilation"){
                        if(imagen_url!=null && imagen_url.length > 0){
                            items.push({type, id, name_album, imagen_url, name_artist});
                        }
                        else{
                            items.push({type, id, name_album, url:ImgNotFound, name_artist});
                        }
                    }
                    else if (type == "track") {
                        if(imagen_url!=null && imagen_url.length > 0){
                            items.push({type, id, name_track, imagen_url, name_album, name_artist, track_lenght, favorite});
                        }
                        else{
                            items.push({type, id, name_track, url:ImgNotFound, name_album, name_artist, track_lenght, favorite});
                        }
                    }
                })
                return items
            });  
}   