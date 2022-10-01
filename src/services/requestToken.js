import axios from "axios";

async function GET_TOKEN () {
    let response = {}
    await axios('https://accounts.spotify.com/api/token', {
      headers :{
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': 'Basic '+ btoa('9946fc98b1664ffdafe7def9e8eec054' + ':' + '4ebd3a4af8bd4e5c822c484dfbde3d6b'), /* Dummy spotify app */
      },
      method: 'POST',
      data:'grant_type=client_credentials'
    }).then(tokenReposnse => {
        response =  tokenReposnse.data.access_token
    }).catch(error => {
      console.error(error);
    })
    

    return response
}

export  { GET_TOKEN }