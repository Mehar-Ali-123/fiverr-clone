import React from 'react'
import Featured from '../../components/Featured/Featured'
// import MarketProducts from '../../components/Market/MarketProducts'
import Slide from '../../components/Slide/Slide'
import './Home.css'
function Home() {
  return (
    <div>
    <Featured/>

    <div className='outsideLinks'>
<ul className='ul'>
  <h3 className='opacity-50'>Trusted By:</h3>
  <li><a to="/"><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png" alt="" /></a></li>
  <li><a to="/"><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png" alt="" /></a></li>
  <li><a to="/"><img src="	https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png" alt="" /></a></li>
  <li><a to="/"><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png" alt="" /></a></li>
  <li><a to="/"><img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png" alt="" /></a></li>
</ul>
</div>

<div className='mid-cards'>
  <h1 className='opacity-75 mx-5 mt-5 text-dark' >Popular Professional Services:</h1>
  <div className=''>

<Slide/>

  </div>
</div>


    </div>
  )
}

export default Home