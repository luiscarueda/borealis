import { GalleryPhoto, Headeraux } from '../../components'
import './gallery.css'
import {  headerData } from '../../constants/data'

const Gallery = () => {
  return (
    <div>
      <Headeraux  title={headerData[2].title} 
                  text={headerData[2].text}
                  imgUrl={headerData[2].imgUrl}
      />
      <GalleryPhoto/>
     </div>
  )
}

export default Gallery
