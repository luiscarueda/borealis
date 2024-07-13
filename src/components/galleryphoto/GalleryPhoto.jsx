import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import './galleryphoto.css'
import { imagesData } from '../../constants/data';


const GalleryPhoto = () => {
  return (
    <div className='galleryphoto'>
        <ReactImageGallery 
        items={imagesData}
        showBullets={true}
        showThumbnails={false}

        />
    </div>
  )
}

export default GalleryPhoto