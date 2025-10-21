import './descriptionleft.css'

const Descriptionleft = ({title,text,text2,text3,imgUrl}) => {
  return (
    <section className='descriptionleft '>
        <div className="container descriptionleft__container ">
            <div className="descriptionleft__image">
                <img src={imgUrl} alt="" />
            </div>
            <div className="descriptionleft__content">
                <h1>{title}</h1>
                <p>{text}</p>
                <p>{text2}</p>
                <p>{text3}</p>
                
            </div>
        </div>
    </section>
  )
}

export default Descriptionleft