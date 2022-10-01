import axios from "axios";

function HANDLE_PLAYLIST_TRACKS(playlist) {
  let refinedList = []
  playlist.forEach(item => {
    const trackData = {
      artistName: item.track.artists[0].name,
      artistId: item.track.artists[0].id,
      albumImage: item.track.album.images[0].url,
      trackName: item.track.name,
      src: item.track.preview_url,
      id: item.track.id
    }
    refinedList.push(trackData)
    //Remove any track which "src" is null
    refinedList = refinedList.filter(track => track.src !== null)
  });
  return refinedList
}

async function GET_TOP_50 (accessToken) {
    let response = []
    await axios('https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks', {
      headers :{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization': 'Bearer '+ accessToken,
      },
      method: 'GET',
    }).then(res => {
        response = HANDLE_PLAYLIST_TRACKS(res.data.items)
    }).catch(error => {
      console.error(error);
    }) 

    return response
}

export  { GET_TOP_50, HANDLE_PLAYLIST_TRACKS }