import './sectionHead.css'

const SectionHead = ({icon,title}) => {
  return (
    <section className='sectionhead'>
        <span>{icon}</span>
        <h2>{title}</h2>
    </section>
  )
}

export default SectionHead