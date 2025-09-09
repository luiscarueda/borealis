import './servicescard.css'

const ServicesCard = ({title,info,price}) => {
  return (
    <div className='servicescard'>
        <h4 >{title}</h4>
        <p >{info}</p>
        <h2 >{price}</h2>
    </div>
  )
}

export default ServicesCard