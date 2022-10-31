import React from 'react'
import { stretchData } from './data'
import JsonData from './data.json'
import { useState, useEffect } from 'react'
import { Motion } from 'framer-motion'
import 'aos/dist/aos.css'
import AOS from 'aos'
let index = 0
let count = 1
let i = 0
let id = 0
const StretchContent = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    useEffect(() => {
        AOS.init({duration:2000})
    },[])
 
    const [nextStretch, setNextStretch] = useState(stretchData[0])
    const click = () => {
        setNextStretch(nextStretch + 1)
        console.log(stretchData[i++].name)
        console.log(nextStretch[i++])
        console.log(i)
        index++
        count++
        console.log(index)
        window.scrollTo(0, 0)
        AOS.refreshHard()
        
        
        return (
            <>
                <StretchContent/>
                </>
            )
       
    }

    return (
        <>
            {stretchData.slice(index,count).map(data => {
                return (
                    <>
                       <div className="stretch-name" key={id}>{data.name}</div>
            <div data-aos="fade-up" className="stretchContent-box">
                <img className="stretchContent-img" src={data.img} />
                <div className="Description">{data.name} Stretch</div>
                 {/*under write benefits and body part it strecthes best known and used for*/}
            </div>

            <div className="steps">
                <ol>
                    <li data-aos="fade-zoom-in">Lay flat on your back with your arms out stretched Lift one leg up and across the body, bringing the knee up to the level of the hips. </li>
                    <li data-aos="fade-down" >Lay flat on your back with your arms out stretched Lift one leg up and across the body, bringing the knee up to the level of the hips.</li>
                    <li data-aos="fade-down">Lay flat on your back with your arms out stretched Lift one leg up and across the body, bringing the knee up to the level of the hips.</li>
                    <li data-aos="fade-sown" >Lay flat on your back with your arms out stretched Lift one leg up and across the body, bringing the knee up to the level of the hips.</li>
             </ol>
            </div>
           
           <button onClick={click}>Next</button>
            
      
                </>    
                )
           })}
            
        </>
    )
}

export default StretchContent
