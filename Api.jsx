import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Api = () => {
    const [user, setuser]= useState([])
  
    const getuser = async()=>{
        const response = await fetch("http://mmb.karbh.com/api/v1/categories")
        setuser(await response.json());
    

    }
    useEffect(()=>{
        getuser()
    },[])
  return (
    <div>
    <div className="container">
    <h2 className='mt-4 text-center'>Api data</h2>
        <div className="row mt-4">
        {
            user.map((val)=>{
                return (
                    <>
                    <div className="col-4">
            <div class="card">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{val.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
  )
}

export default Api
