import axios from 'axios';

export default function authService(user, url){

    return new Promise(function(resolve, reject){
        axios.post(url, user, {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}).then(response => {resolve(response.data);}).catch(error => {
            console.log("ERROR in login: " + JSON.stringify(error));
            reject(error.response);});

    });

}