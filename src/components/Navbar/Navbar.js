import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Navbar.css'
function Navbar() {

  const [activeNav, setActiveNav] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()


  const isActiveNav = () => {
    window.scrollY > 0 ? setActiveNav(true) : setActiveNav(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActiveNav);

    return () => {
      window.removeEventListener("scroll", isActiveNav);
    };
  }, []);

  const currentUser = {
    id: 1,
    usernamae: "ALI",
    isSeller: true,
  }

  return (
    <>
      <nav className={activeNav || pathname !== '/' ? "navbar navbar-expand-lg   px-5 navbar-main navbar-main-active bg-white" : "navbar navbar-expand-lg  px-5 navbar-main"}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 " to="/"><b>fiverr</b><span className='span'>.</span></Link>

          {/* search bar */}



          <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-light"></span>
          </button>

          {activeNav && <div className="search1">
            <input type="search" name="" id="" placeholder='services are you looking' />
            <button>Search</button>
          </div>}

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Fiver Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Eplore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">English</a>
              </li>
              <li className="nav-item">
                {!currentUser?.isSeller && <a className="nav-link active" aria-current="page" href="#">Become a Seller</a>}
              </li>
              <li className="nav-item">
                {!currentUser?.isSeller && <a className="nav-link active" aria-current="page" href="#">Sign In </a>}
              </li>
              <li className="nav-item">
                {/* {currentUser &&  <a className="nav-link active" aria-current="page" href="#">ALI</a>} */}
              </li>

            </ul>

            {!currentUser?.isSeller && <button className="btn button" type="submit">Join</button>}
            {currentUser?.isSeller && (
              <div className='user' onClick={() => setOpen(!open)}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTykU2BZtuaSIFXvPHnTJsaL-Z3NgRvA2sA&usqp=CAU" alt="" />
                <span><b>{currentUser?.usernamae}</b></span>
                {open && (<div className="options">
                  {
                    currentUser?.isSeller && (
                      <>
                        <Link to='/mygigs' className='link'> <span>Gigs</span></Link>
                        <Link to='/newgig' className='link' ><span>Add New Gig</span></Link>
                      </>
                    )}
                  <Link to='/orders' className='link'><span>Orders</span></Link>
                  <Link to='/messages' className='link'><span>Messages</span></Link>
                  <Link to='/logout' className='link'><span>Logout</span></Link>
                </div>)}
              </div>)}
          </div>
        </div>

        {(activeNav || pathname !== '/') && <>
          <hr className='hr' />
          <div className='menu'>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
          </div>
          <hr className='hr' />
        </>}
      </nav>

    </>
  )
}

export default Navbar