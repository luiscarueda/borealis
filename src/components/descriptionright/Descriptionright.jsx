import './descriptionright.css'

const Descriptionright = ({title,text,text2,text3,imgUrl}) => {
  return (
<section>
        <div className="descriptionright__container container">          
             <div className="descriptionright__content">
                <h1>{title}</h1>
                <p>{text}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>
           <div className="descriptionright__image">
                <img src={imgUrl} alt="" />
            </div>           
        </div>
</section>
    
  )
}

export default Descriptionright