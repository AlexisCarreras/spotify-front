export default function AuthService() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userName: 'Alexis123', password: 'Alexis123123!' })
        };
        return fetch('https://localhost:44395/api/v1/account/authenticate', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
}   