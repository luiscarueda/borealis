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
            answer2={faqs.answer2}            
            />
          ))}
          <h3>You can also take classes from two levels to make the transition smoother.
              As a general guideline:
          </h3>
            <p>Level 1: Minimum of 3 months</p>
            <p>Level 2: 6–9 months</p>
            <p>Level 3: Designed to be enjoyed and refined for years to come</p>
           <h3>Remember — patient students progress faster than those who rush. <i>Enjoy the process</i>; dance is a lifelong journey.
           </h3>
        </div>
      </div>
    </section>
  )
}
export default FAQs