import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

const navigate =useNavigate()

const goHome =()=>{
navigate('/')
}


  return (
    <div className='m-5 ' > 

<button  onClick={goHome}  className='bg-amber-400 text-2xl font-bold p-2 active:scale-95' >Back To HomePage</button>
<button  onClick={()=>{
    navigate(-1)
}}  className='bg-amber-400 text-2xl font-bold p-2 m-2 active:scale-95' >Back </button>
<button  onClick={()=>{
     navigate(+1)
}}  className='bg-amber-400 text-2xl font-bold p-2  active:scale-95' >Next</button>

    </div>
  )
}

export default Navbar2
