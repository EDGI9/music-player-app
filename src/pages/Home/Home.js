import './Home.scss';
import Player from "../../components/Player/Player.js";
import BigImage from "../../components/BigImage/BigImage.js";
import Title from "../../components/Title/Title.js";
import SubTitle from "../../components/SubTitle/SubTitle.js";
import ArtistSidePanel from "../../components/ArtistSidePanel/ArtistSidePanel.js";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle.js";
import WaveAnimation from "../../components/WaveAnimation/WaveAnimation.js";
import { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux'
import { GET_TOKEN } from '../../services/requestToken.js'
import { GET_TOP_50 } from '../../services/playlists.js'


function Home() {
  const player = useSelector(state => state.player)
  const playlist = useSelector(state => state.playlist)
  const artist = useSelector(state => state.artist)
  const global = useSelector(state => state.global)
  const dispatch = useDispatch()
  
  // Fetch list of tracks and set current track
  useEffect(() => {
    const fecthData = async () => {
       const tokenResponse = await GET_TOKEN()
       const tracksReponse = await GET_TOP_50(tokenResponse)
       dispatch({ type: 'global/SET_TOKEN', payload: tokenResponse})
       dispatch({ type: 'playlist/SET_PLAYLIST', payload: tracksReponse})
       dispatch({ type: 'playlist/SET_CURRENT_TRACK', payload: 0})
    }
    fecthData()
  }, [])

  return (
      <main className="relative overflow-hidden h-full">
        <section className="grid grid-cols-6 gap-4 h-full content-center">
          <div className="col-start-2 col-span-4 grid grid-rows-3">
            <div className="flex justify-center content-center relative">
              <BigImage image={playlist.currentTrack.albumImage} className="z-[1]"></BigImage>
              <ProgressCircle
                className="absolute justify-self-center -top-6"  
                percentage={player.progress}
                isPlaying={true}
                size={290}
                color="#FF0036"
              />
            </div>
            <div className="grid justify-center content-center align-center gap-6">
              <Title text={playlist.currentTrack.trackName}></Title>
              <SubTitle text={playlist.currentTrack.artistName}></SubTitle>
            </div>
            <div className="flex items-center justify-center ">
              <Player/>
            </div>
          </div>
        </section>
        <ArtistSidePanel show={global.showSidePanel} artistInfo={artist.data}/>
        <WaveAnimation/>
      </main>
  );
}

export default Home;
