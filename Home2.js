import React from 'react'
import { useState } from 'react'
import data from './Data'
// import img from "./img/l1.png"

const Home2 = () => {
    const [box,setbox]= useState(data)
  return (
    <>
    <div className="container bg-light">
        <div className="row mt-4">
            <div className="col-12">
                <h1 className='home2'>Why Choose DigiMarket</h1>
                <p className='parah'>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on <br/> the Internet tend to repeat predefined necessary.</p>
            </div>
        </div>
    
    <div className="container1 mt-4 mb-4">
        <div className="row">
        {
            box.map((val)=>{
                const{heading,para,logo}= val
                return(
                    <>
                    <div className="col-4">
            <div class="card bg-gradient" style={{borderRadius: "25px"}}>
  <div class="card-body " id='single'>
  <h1 className='mylogo'>{logo}</h1>
    <h5 class="card-title outerheading">{heading}</h5>
    <p class="card-text outerpara">{para}</p>
  </div>
</div>
                
            </div>
                    </>
                )
            })
        }
        
        </div>
    </div>
    </div>
    </>
  )
}

export default Home2
