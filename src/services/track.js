 function GET_CURRENT_TRACK (playlist, trackId) {
    let response = {}
    playlist.forEach(item => {
        if (item.id === trackId) {
            response = item
        }
    })

    return response
 }

 export  { GET_CURRENT_TRACK }