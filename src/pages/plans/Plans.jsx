import { Headeraux, Programs} from '../../components'
import './plans.css'
import { HEADER } from '../../constants/data'


const Plans = () => {
  return (
    <div>
      <Headeraux  title={HEADER[2].title} 
                  text={HEADER[2].text}
                  imgUrl={HEADER[2].imgUrl}
      />
      <div className='plans'>
         <Programs/>                          
      </div>              
    </div>
  )
}

export default Plans