import { Programming, Headeraux } from '../../components'
import './schedule.css'
import { HEADER } from '../../constants/data'

const Schedule = () => {
  return (
    <div>
       <Headeraux  title={HEADER[1].title} 
                  text={HEADER[1].text}
                  imgUrl={HEADER[1].imgUrl}
       />
       <Programming/>
    </div>
  )
}

export default Schedule