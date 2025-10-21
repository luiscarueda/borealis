import './faqs.css'
import { FAQS } from '../../constants/data';
import SectionHead from '../SectionHead/SectionHead';
import { FaQuestion } from 'react-icons/fa';
import { FAQCard } from '../../UI';

const FAQs = () => {
  return (
    <section className='FAQs'>
      <div className="FAQs__container container">
        <SectionHead icon={<FaQuestion/>} title='FAQS'/>
        <div className="FAQs__wrapper">
          {FAQS.map((faqs)=>(
            <FAQCard
            key={faqs.question} 
            question={faqs.question} 
            answer={faqs.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default FAQs