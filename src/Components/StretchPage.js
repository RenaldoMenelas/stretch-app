import React from 'react'
import { stretchData } from '../data'
import { useState, useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
let random = stretchData[Math.floor(Math.random() * stretchData.length)]
//let randoms = stretchData.sort(()=> .5 - Math.random())
let index = 0
let count = 0
console.log(stretchData.length)
console.log(stretchData[0])
const StretchContent = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
        AOS.init({duration:2000})
      }, [])

  
  
    const [nextStretch, setNextStretch] = useState(stretchData[index])
    
    const nextClick = () => {
        setNextStretch(stretchData[index += 1])
        window.scrollTo(0, 0)
        console.log(stretchData[index])
        console.log(nextStretch)
       count++
    }

    console.log(count)

    const backClick = () => {
        setNextStretch(stretchData[index -=1])
        console.log(setNextStretch) 
        console.log(stretchData[index])
        window.scrollTo(0, 0)
     
        count--
     
    }

    const startOver = () => {
        setNextStretch(stretchData[index -= count])
        count = 0
        window.scrollTo(0, 0)
    }
    console.log(index)
    
   //console.log(nextStretch.name)
        

    return (
        <>     
           <div className="stretch-name" key={nextStretch.id}>{nextStretch.name}</div>
            <div data-aos="fade-up" className="stretchContent-box">
                <img className="stretchContent-img" src={nextStretch.img} />
         
                {!stretchData[index].nextButton?<div className="Description">{nextStretch.name} Stretch </div> : <div className="Description">{nextStretch.name}</div> }

                
                 {/*under write benefits and body part it strecthes best known and used for*/}
            </div>

            <div className="steps">
                <ol>
                                <li>{nextStretch.description[0]} </li>
                                <li data-aos="fade-zoom-in">{nextStretch.description[1]} </li>
                                <li data-aos="fade-zoom-in">{nextStretch.description[2]} </li>
                                <li data-aos="fade-zoom-in">{nextStretch.description[3]} </li>
                                <li data-aos="fade-zoom-in">{nextStretch.description[4]} </li>
                   
              
              </ol>
            </div>
            <div className="buttons">
                 {!stretchData[index].noBackButton ? <button onClick={backClick}>Back</button> : null}
               {stretchData[index].nextButton?  <button onClick={startOver} className='restart-btn'>Restart</button>: <button onClick={nextClick}>Next</button>}
            </div>
            
        </>
    )
}

export default StretchContent
