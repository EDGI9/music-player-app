import axios from "axios";

function HANDLE_ARTIST_INFO(artist) {
    let refinedArtist = {}
    let {followers, name, popularity, genres, images} = artist
    refinedArtist = {...refinedArtist, total: followers.total, name, popularity, genres, image: images[0].url}
    return refinedArtist
  }

async function GET_ARTIST_INFO (accessToken, id) {
    let response = {}
    if (accessToken !== undefined && id !== undefined) {
      await axios(`https://api.spotify.com/v1/artists/${id}`, {
        headers :{
          'Content-Type':'application/json',
          'Accept':'application/json',
          'Authorization': 'Bearer '+ accessToken,
        },
        method: 'GET',
      }).then(res => {
          response = HANDLE_ARTIST_INFO(res.data)
      }).catch(error => {
        console.error(error);
      }) 
  
    }
    return response
}

export  { GET_ARTIST_INFO }