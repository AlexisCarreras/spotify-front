export default function TrackFeaturesService(id) {
    const ApiUrl = `https://localhost:44395/api/Track/${id}/track-features`
    console.log(ApiUrl)
    return fetch(ApiUrl)
            .then(response => response.json())
            .then(data => (data)) 
}  