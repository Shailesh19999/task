import React from 'react'
import all from "./img/all.png"

const Home3 = () => {
  return (
    <>
    <h1 className='heading3'>Newly Added Items</h1>
    <p className='para3'>Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on <br/> the Internet tend to repeat predefined necessary.</p>
    <div className="container">
        <div className="row allbtn">
            <div className="col-2"><button class="btn btn-outline-danger border-2 bg-danger text-light" style={{ borderRadius: "25px",fontSize: "15px"}} type="submit">All Items</button> </div>
            <div className="col-2"><button class="btn btn-outline-light text-black border-2" style={{ borderRadius: "25px",fontSize: "15px"}} type="submit" >World Press</button> </div>
            <div className="col-2"><button class="btn btn-outline-light text-black border-2" style={{ borderRadius: "25px",fontSize: "15px"}} type="submit">Site Templates</button> </div>
            <div className="col-2"><button class="btn btn-outlinelight text-black border-2" style={{ borderRadius: "25px",fontSize: "15px"}} type="submit">CMS Themes</button> </div>
            <div className="col-2"><button class="btn btn-outline-light text-black border-2" style={{ borderRadius: "25px",fontSize: "15px"}} type="submit">E-commerce</button> </div>
            <div className="col-2"><button class="btn btn-outline-light text-black border-2" style={{ borderRadius: "25px",fontSize: "15px"}} type="submit">Joomla</button> </div>
            <img src={all} alt="" className='mt-4' />
            
        </div>
    </div>
      
    </>
  )
}

export default Home3
