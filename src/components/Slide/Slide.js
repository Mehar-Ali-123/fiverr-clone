import React from 'react'
import './Slide.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import MarketProducts from '../Market/MarketProducts';
function Slide() {

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    // arrows:false
  
  };

  var settings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // arrows:false
  
  };

  return (
    <>
    <div className='slider' >

      {/* <Slider {...settings}>
        <div>
          <div class="card text-bg-dark" style={{ width: "18rem" }}>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>

        <div>
          <div class="card text-bg-dark" style={{ width: "18rem" }}>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>

        <div>
          <div class="card text-bg-dark" style={{ width: "18rem" }}>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>


        <div>
          <div class="card text-bg-dark" style={{ width: "18rem" }}>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>

        <div>
          <div class="card text-bg-dark" style={{ width: "18rem" }}>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>

        <div>
          <div class="card text-bg-dark" style={{ width: "18rem" }}>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>

        <div>
          <div class="card text-bg-dark" style={{ width: "18rem" }}>
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>


      </Slider> */}

      <Slider {...settings}>

    
        <div>
          <div className='img-div'>
          <Link to="/">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            </Link>
          </div>
        </div>

        <div>
          <div className='img-div'>
          <Link to="/">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            </Link>
          </div>
        </div>

        <div>
          <div className='img-div'>
          <Link to="/">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            </Link>
          </div>
        </div>

        <div>
          <div className='img-div'>
          <Link to="/">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            </Link>
          </div>
        </div>

        <div>
          <div className='img-div'>
          <Link to="/">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            </Link>
          </div>
        </div>

        <div>
          <div className='img-div'>
          <Link to="/">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img" alt="..." />
            </Link>
          </div>
        </div>
      </Slider>
    </div>

    
<div  className='slide-featured-data'>

<div className="slide-featured-documentation">


<h2 className='text-dark opacity-75'>A whole world of freelance talent at your fingertips</h2>
  
<div>
 <h3>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> The best for every budget</h3>
  <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
 </div>

 <div>
 <h3>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Quality work done quickly</h3>
  <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
 </div>

 <div>
 <h3> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Protected payments, every time</h3>
  <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
 </div>
 <div>
 <h3> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> 24/7 Support Service</h3>
  <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
 </div>

</div>
<div className="slide-featured-video">

{/* <video src="./video/video1.mp4" controls></video> */}
<video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi" controls></video>

</div>
</div>

<MarketProducts/>


<div  className='slide-featured-data-2'>

<div className="slide-featured-documentation">

<div className='d-flex align-items-center'><h2>fiverr business.</h2><p className="badge bg-success d-flex align-items-center">New</p>
</div>
<h2 className='my-4'>A business solution designed for teams</h2>
  <h5 className='my-4'>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</h5>
<div>
 <p>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Connect to freelancers with proven business experience</p>
 </div>

 <div>
 <p>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Connect to freelancers with proven business experience</p>
 </div>

 <div>
 <p>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg> Connect to freelancers with proven business experience</p>
 </div>

<button className='btn button  my-4 py-2'><b>Explore The Business</b></button>

</div>
<div className="slide-featured-image">

<img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
{/* <iframe src="./video/video1.mp4" ></iframe> */}

</div>
</div>


<div  className='slide-featured-data bg-transparent'>
<div className="slide-featured-video">

<video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/plfa6gdjihpdvr10rchl" controls></video>
{/* <iframe src="./video/video1.mp4" ></iframe> */}

</div>

<div className="slide-featured-documentation">
<h3>Catlin Tromey | <b>NORAMA</b></h3>
  
<div>
  <p className='text-success'>
 Lorem ipsum dolor sit amet.
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quos hic, sit 
 laudantium et alias eum possimus ullam pariatur ratione incidunt dicta nisi 
 numquam ut quae laboriosam quas expedita debitis laborum autem, cupiditate dolores 
 exercitationem. Ullam expedita molestias minima earum!
 dicta nisi 
 numquam ut quae laboriosam quas expedita debitis laborum autem, cupiditate dolores 
 exercitationem. Ullam expedita molestias minima earum!
  </p>
</div>

</div>
</div>


<div  className='slide-featured-data-3 '>
<div className="logo-container">

<img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png" alt="" />

<div className='logo-documentation'>
<h3 className='text-light'><b>fiverr</b> logo maker. </h3>
  <h1 className='text-light'>Make an incredible logo <br /> in minutes</h1>
  <p className='text-light '>
  Pre-designed by top talent. Just add your touch.
  </p>
  <button className='text-primary btn btn-light w-50 py-2'>Try fiverr logo maker</button>
</div>

</div>
</div>


<div className="slider  last-slider">
<Slider {...settings2}>

<div>
  <div className='img-div'>
  <Link to="/">
  <div class="card" style={{width: "18rem"}}>
  <img style={{height:"18rem"}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    
    <p class="card-text px-2"><b>BOOK DESIGN</b> <br /><span>By nonyen</span></p>
    
  </div>
</div>
    
    </Link>
  </div>
</div>

<div>
  <div className='img-div'>
  <Link to="/">
  <div class="card" style={{width: "18rem"}}>
  <img style={{height:"18rem"}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    
    <p class="card-text px-2"><b>BOOK DESIGN</b> <br /><span>By nonyen</span></p>
    
  </div>
</div>
    
    </Link>
  </div>
</div>

<div>
  <div className='img-div'>
  <Link to="/">
  <div class="card" style={{width: "18rem"}}>
  <img style={{height:"18rem"}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    
    <p class="card-text px-2"><b>BOOK DESIGN</b> <br /><span>By nonyen</span></p>
    
  </div>
</div>
    
    </Link>
  </div>
</div>

<div>
  <div className='img-div'>
  <Link to="/">
  <div class="card" style={{width: "18rem"}}>
  <img style={{height:"18rem"}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    
    <p class="card-text px-2"><b>BOOK DESIGN</b> <br /><span>By nonyen</span></p>
    
  </div>
</div>
    
    </Link>
  </div>
</div>


<div>
  <div className='img-div'>
  <Link to="/">
  <div class="card" style={{width: "18rem"}}>
  <img style={{height:"18rem"}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    
    <p class="card-text px-2"><b>BOOK DESIGN</b> <br /><span>By nonyen</span></p>
    
  </div>
</div>
    
    </Link>
  </div>
</div>

<div>
  <div className='img-div'>
  <Link to="/">
  <div class="card" style={{width: "18rem"}}>
  <img style={{height:"18rem"}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    
    <p class="card-text px-2"><b>BOOK DESIGN</b> <br /><span>By nonyen</span></p>
    
  </div>
</div>
    
    </Link>
  </div>
</div>

<div>
  <div className='img-div'>
  <Link to="/">
  <div class="card" style={{width: "18rem"}}>
  <img style={{height:"18rem"}} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" class="card-img-top" alt="..."/>
  <div class="card-body ">
    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    
    <p class="card-text px-2"><b>BOOK DESIGN</b> <br /><span>By nonyen</span></p>
    
  </div>
</div>
    
    </Link>
  </div>
</div>

</Slider>
</div>

{/* 2nd last */}

<div className=" container-fluid guides-container">
  <div className="row">
    <div className="col-md-4">
    <div className="guides-data">
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" alt="" />
      <h3> Create a logo for your business
</h3>
<p>A step-by-step guide to create a memorable business logo
See More Guides
The talent you need
Find the tal</p>
    </div>
    </div>

    <div className="col-md-4">
    <div className="guides-data">
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" alt="" />
      <h3> Create a logo for your business
</h3>
<p>A step-by-step guide to create a memorable business logo
See More Guides
The talent you need
Find the tal</p>
    </div>
    </div>

    <div className="col-md-4">
    <div className="guides-data">
      <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg" alt="" />
      <h3> Create a logo for your business
</h3>
<p>A step-by-step guide to create a memorable business logo
See More Guides
The talent you need
Find the tal</p>
    </div>
    </div>
  
  </div>
</div>

{/* last -logo  */}

<div  className='slide-featured-data-3 bg-transparent '>
<div className="logo-container ">

<img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="" />

<div className='logo-documentation px-5'>

  <h1 className='text-light'>Find the <i>talent </i> needed to get your business <i>growing</i>.</h1>
 
  <button className='text-light btn btn-success  w-25 py-2 my-3'>Get Started</button>
</div>

</div>
</div>
</>

  )
}

export default Slide