import { Headeraux, Programs} from '../../components'
import './plans.css'
import { HEADER } from '../../constants/data'


const Plans = () => {
  return (
    <div>
      <Headeraux  title={HEADER[1].title} 
                  text={HEADER[1].text}
                  imgUrl={HEADER[1].imgUrl}
      />
      <div className='plans'>
         <Programs/>                          
      </div>              
    </div>
  )
}

export default Plans