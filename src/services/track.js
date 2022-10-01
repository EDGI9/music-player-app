 function GET_TRACK_ARTIST_IMAGE (trackObject) {}//Delete
 function GET_TRACK_ARTIST_NAME (trackObject) {}//Delete
 function GET_TRACK_NAME (trackObject) {}//Delete
 function GET_CURRENT_TRACK (playlist, trackId) {
    let response = {}
    playlist.forEach(item => {
        if (item.id === trackId) {
            response = item
        }
    })

    return response
 }

 export  { GET_CURRENT_TRACK, GET_TRACK_ARTIST_IMAGE, GET_TRACK_ARTIST_NAME,GET_TRACK_NAME }