import React, { useState } from 'react'
import GigCard from '../../components/Gig Card/GigCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../Footer/Footer'

import './Gigs.css'

function Gigs() {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState("sales")

  const reSort = (type) => {
    setSort(type)
    setOpen(false)

  }

  return (
    <div className='gigs'>
      <Navbar />


      <div className="container">

        <span>Fiverr -- Graphic & Design</span>
        <br />
        <br />
        <h4><b>AI - DESIGN ARTIST</b></h4>
        <p>Explore the business and art of technology with fiverr Ai Artist</p>
        <div className="menu-gigs">
          <div className="left">
            <span>Budget</span>
            <input type="text" name="" id="" placeholder='max' />
            <input type="text" name="" id="" placeholder='min' />
            <button className='btn btn-success text-light mx-3'>Apply</button>
          </div>
          <div className="right">
            <span> {sort === "sales" ? "Sort by:" : "Sorted by:"}</span>
            <div className='sort-by' onClick={() => setOpen(!open)}>
              <p><b>{sort === "sales" ? "Best Selling" : "Newest"}</b></p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
</svg>
              {open && (<div className='sort-type'>
                <span onClick={() => reSort("createdAt")}>Newest</span>
                <span onClick={() => reSort("sales")}>Best Selling</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>

      <h1 className='m-4'>Gig cards are described here</h1>

      
      <GigCard />
      <Footer />
    </div>
  )
}

export default Gigs