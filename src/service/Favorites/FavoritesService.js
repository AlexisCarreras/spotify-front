export default function getData() {
    return fetch('./data.json')
        .then(response => response.json())
        .then(data => (data))  
}