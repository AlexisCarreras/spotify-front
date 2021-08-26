export default function getData() {
    return fetch('./data.json',
    {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    )
        // .then(function(response){
        //     console.log(response)
        // })
        // .then(function(myJson){
        //     console.log(myJson);
        // });
        .then(response => response.json())
        .then(data => console.log(data)) 
}