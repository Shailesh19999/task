import React, { useState } from 'react'
import z from "./img/z.png"
import z1 from "./img/z2.png"
import z2 from "./img/z3.png"
import z3 from "./img/z4.png"
import z4 from "./img/z5.png"
import data from './Data'


const Home1 = () => {
    
    const[mydata,setmydata]=useState(data)
  return (
    <>
    <div className="container">
        <div className="row mt-4">
            <div className="col-2 logo ">
                <img src={z} alt="" className='mx-4' width={"120px"} height  />
            </div>
            <div className="col-2">
                <img src={z1} alt="" className='mx-4' width={"120px"}/>
            </div>
            <div className="col-2">
                <img src={z2} alt=""  className='mx-4' width={"120px"} />
            </div>
            <div className="col-2">
                <img src={z3} alt=""  className='mx-4' width={"120px"} />
            </div>
            <div className="col-2">
                <img src={z4} alt=""  className='mx-4' width={"120px"} />
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <h1 className='heading1'>Featured Items</h1>
                <p className='para1'>Nemo enim ipsam voluptatem quia voluptas aspernatur</p>
            </div>
            <div className="col-6 sandy">
            <button class="btn btn-outline-danger border-2" style={{ borderRadius: "25px",fontSize: "20px"}} type="submit">All items</button>
            </div>
        </div>
        <div className="row">
        {
            mydata.map((val)=>{
                const{image,name,title,price}= val
                return(
                    <>
                    <div className="col-4 mt-5">
            <div class="card" >
  <img src={image} class="card-img-top" alt="random"/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{title}</p>
    <p class="card-text">{price}</p>
  </div>
</div>
            </div>
                    </>
                )
            })
        }
           
        </div>

    </div>
      
    </>
  )
}

export default Home1
