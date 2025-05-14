import './headeraux.css'

const Headeraux = ({imgUrl,title,text,}) => {
  return (
    <header className='headeraux'>
      <div className="headeraux__container">
        <div className='headeraux__container-bg'>
          <img src={imgUrl} alt="image-bg" />
        </div>
        <div className="headeraux__content">
          <h2>{title}</h2>
          <p>{text}</p>          
        </div>
      </div>   
      
    </header>
  )
}
export default Headeraux