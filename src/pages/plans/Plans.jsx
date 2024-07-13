import { FAQs, Headeraux, Programs} from '../../components'
import './plans.css'
import { headerData } from '../../constants/data'


const Plans = () => {
  return (
    <div>
      <Headeraux  title={headerData[1].title} 
                  text={headerData[1].text}
                  imgUrl={headerData[1].imgUrl}
                />
      <Programs/>       
      <FAQs/>          
      
    </div>
  )
}

export default Plans