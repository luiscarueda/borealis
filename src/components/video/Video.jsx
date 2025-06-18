import './video.css'
import ReactPlayer from 'react-player'
import Videoprueba from '../../assets/video1.mp4'

const Video = () => {
  return (
    <div className='video initial'>
        <ReactPlayer className='video__component '
          url={Videoprueba}           
          muted
          loop 
          playing
          width='100%'
          height='100%'         

        />
    </div>
  )
}

export default Video