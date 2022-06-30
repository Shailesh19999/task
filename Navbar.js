import React from 'react'
import img from "./img/logo.png"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white" >
  <div class="container" >
    <a class="navbar-brand" href="#"><img src={img} alt="" className='myimg'/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 "style={{fontSize: "18px",fontWeight: "bold"}}>
        <li class="nav-item">
          <a class="nav-link active text-danger" aria-current="page" href="#">Home+</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About+</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Themes+</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pages+</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact+</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" style={{  marginLeft: "50px"}}>🛒 0 Items</a>
        </li>
      </ul>
      <button class="btn btn-outline-danger border-2" style={{ borderRadius: "25px"}} type="submit">My account</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
