import { Programming, Headeraux } from '../../components'
import './schedule.css'
import { HEADER } from '../../constants/data'

const Schedule = () => {
  return (
    <div>
       <Headeraux  title={HEADER[0].title} 
                  text={HEADER[0].text}
                  imgUrl={HEADER[0].imgUrl}
       />
       <Programming/>
    </div>
  )
}

export default Schedule