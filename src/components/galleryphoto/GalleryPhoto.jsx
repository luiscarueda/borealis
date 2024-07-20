import ReactImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import './galleryphoto.css'
import { imagesData } from '../../constants/data';


const GalleryPhoto = () => {
  return (
    <div className='galleryphoto '>
        <ReactImageGallery 
        items={imagesData}
        showBullets={true}
        showNav={false}
        showThumbnails={false}                
        showFullscreenButton={true}
        slideDuration={2000}
        slideInterval={1000}
        showIndex={true}
        lazyLoad={true}
        

        />
    </div>
  )
}

export default GalleryPhoto