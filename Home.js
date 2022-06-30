import React from 'react'
import bck from "./img/bckk.png"

const Home = () => {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-6 mt-4">
                <h1 className='heading'>Best Themes and <br/> Plugins Marketplace</h1>
                <p className=' para '>Welcome to DigiMarket Multi vendor Marketplace Theme. <br/> Buy and Sell any kind of Digital Product you Wish.</p>
                <div className="btn">
                <button class="btn btn-outline-danger border-2 text-light bg-danger mx-4" style={{ borderRadius: "25px",  fontSize: "20px"}} type="submit">Shop Now</button>
                <button class="btn btn-outline-danger border-2" style={{ borderRadius: "25px",fontSize: "20px"}} type="submit">Start Selling</button>
                </div>
                
            </div>
            <div className="col-6 mt-4">
                <img src={bck} alt="" />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Home
