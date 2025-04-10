import './descriptionleft.css'

const Descriptionleft = ({title,text,imgUrl}) => {
  return (
    <section className='descriptionleft'>
        <div className="descriptionleft__container container">
            <div className="descriptionleft__image">
                <img src={imgUrl} alt="" />
            </div>
            <div className="descriptionleft__content">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </section>
  )
}

export default Descriptionleft