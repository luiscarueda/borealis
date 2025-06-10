import './video.css'
import ReactPlayer from 'react-player'
import Videoprueba from '../../assets/video1.mp4'

const Video = () => {
  return (
    <div className='video '>
        <ReactPlayer className='video__component '
          url={Videoprueba}
          controls 
          loop           
        />
    </div>
  )
}

export default Video