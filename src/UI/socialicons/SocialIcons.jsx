import './socialicons.css'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <>
    <div >
        <p>FOLLOW ME ON MY SOCIAL NETWORKS.... </p>
         <div className="footer__socials">                    
              <a  href='https://www.facebook.com/borealislatindance?locale=es_LA' target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
              <a  href='https://www.instagram.com/borealislatindance/'            target='_blank' rel='noreferrer noopener'><FaInstagram/></a>              
            </div>
    </div>         
    </>
  )
}

export default SocialIcons