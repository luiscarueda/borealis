import './faqs.css'
import { faqsData } from '../../constants/data';
import SectionHead from '../SectionHead/SectionHead';
import { FaQuestion } from 'react-icons/fa';
import { FAQCard } from '../../UI';


const FAQs = () => {
  return (
    <section>
      <div className="FAQ__container container">
        <SectionHead icon={<FaQuestion/>} title='FAQS'/>
        <div className="FAQs__wrapper">
          {faqsData.map((faqs)=>(
            <FAQCard
            key={faqs.question} 
            question={faqs.question} 
            answer={faqs.answer}/>
          ))}
        </div>
      </div>



    </section>
  )
}

export default FAQs