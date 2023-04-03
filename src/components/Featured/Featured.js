import React from 'react'
import './Featured.css'
import { Link } from 'react-router-dom'
function Featured() {
  return (
    <div className="featured">

        <div className="left">
          <div className='left-data'>
            <div className="heading"><h1>Find the perfect <span><i>freelance</i></span> <br /> services for your business</h1></div>
            <div className="search">
              <input type="search" name="" id="" placeholder='  Try building mobile app' />
              <button>Search</button>
            </div>
<div className='feilds'>
<h5 className='text-light'>popular:</h5> 
<div className='popularFeilds'>
<ul className='links'>
  <li><Link to="/">Website Design</Link></li>
  <li><Link to="/">WordPress</Link></li>
  <li><Link to="/">Logo Design</Link></li>
  <li><Link to="/">AI Services</Link></li>
  </ul>
  </div>
  </div>
</div>
        </div>
        <div className="right">
            <img src="./images/fiver-hero1.png" alt="" />
            
            {/* <img src=" https://png.pngtree.com/png-clipart/20230315/ourmid/pngtree-handsome-man-is-smiling-png-image_6648970.png" alt="" /> */}
           
        </div>

      
    </div>
  )
}

export default Featured