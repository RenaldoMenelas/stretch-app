import React from 'react'
import { stretchData } from './data'
import JsonData from './data.json'
import { useState, useEffect } from 'react'

let i = 0
let id = 0
const StretchContent = () => {
 
    const [nextStretch, setNextStretch] = useState(0)
    const click = () => {
        setNextStretch(nextStretch + 1)
        console.log(stretchData[i++].name)
        setNextStretch(nextStretch => !nextStretch)
       
    }

    return (
        <>
             <div className="stretch-name">{stretchData[0].name}</div>
            <div className="stretchContent-box">
                <img className="stretchContent-img" src={stretchData[0].img} />
                <div className="Description">Cobra Stretch</div>
                 {/*under write benefits and body part it strecthes best known and used for*/}
            </div>

            <div className="steps">
                <ol>
                    <li>Lay flat on your back with your arms out stretched Lift one leg up and across the body, bringing the knee up to the level of the hips. </li>
                    <li>Lay flat on your back with your arms out stretched Lift one leg up and across the body, bringing the knee up to the level of the hips.</li>
                    <li>Lay flat on your back with your arms out stretched Lift one leg up and across the body, bringing the knee up to the level of the hips.</li>
                    <li>Lay flat on your back with your arms out stretched Lift one leg up and across the body, bringing the knee up to the level of the hips.</li>
             </ol>
            </div>
           
           <button onClick={click}>Next</button>
            
    
        </>
    )
}

export default StretchContent
