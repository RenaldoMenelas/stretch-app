import React from 'react'
import Image from '../leg-stretching.png'
import GroupStretch from '../GroupStretch.jpeg'
import StretchContent from '../StretchContent'
import { useState ,useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

let index = 0
const Content = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [clicked, setClicked] = useState(false)

  const click = () => {
   
    setClicked(current => !current)
    console.log(clicked)
   
  }

  
  return (
    
    <>
      
      {!clicked ?  <div className="container">
          <div className="hero">
      <img className="hero_img"  src={Image} />
      <p className="hero-p"> 
          Hey, ever wanted an app for stretching? 
        </p>
        </div>
      <p className="stretch-to-success" > Stretch Your Way To Success</p>

      <p className="About">Provides you with top Stretches to fully lengthen and promote muscle strength and flexibility </p>
   <button  onClick={click} >Press & Stretch</button> 
      
      <div className="stretches">
          <img className="stretch_img" src={GroupStretch} />
        </div>

        <div className="footer-line"></div>
        </div>: <StretchContent/>}
     
        </>

    )
}

export default Content
