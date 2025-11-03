import React from 'react'
import Men from './men';
import Women from './Women';
import { Link  , Outlet} from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1 className='text-white'>About....</h1>

<div  className='text-center '>
  <Link  to={'Men'}   className='text-blue-600  font-semibold  text-4xl m-2 ' >Men</Link>
<Link to={'Women'}      className='text-pink-700  font-semibold  text-4xl '   >Women</Link>

</div>

 <Outlet />
    </div>
  )
}

export default About
