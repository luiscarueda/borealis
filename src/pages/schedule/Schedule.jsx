import { Programming, Headeraux, FAQs } from '../../components'
import './schedule.css'
import { HEADER } from '../../constants/data'

const Schedule = () => {
  return (
    <div>
       <Headeraux  title={HEADER[1].title} 
                   imgUrl={HEADER[1].imgUrl}
       />
      <Programming/>
      <FAQs/> 
    </div>
  )
}

export default Schedule