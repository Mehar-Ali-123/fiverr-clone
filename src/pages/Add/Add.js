import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Add.css'
function Add() {
  return (
    <div className='add'>
<Navbar/>

     <div className="container">
      <h1>Add New Gig</h1>
<div className="container ">
  <div className="row">
    <div className="col-md-6 add-gig-left">

      <label htmlFor="">Title</label>
      <input type="text" name="" id="" placeholder='I will do something ...'/>
      <label htmlFor="">Category</label>
      <select name="cats" id="cats">
        <option value="design">Design</option>
        <option value="web">Web Development</option>
        <option value="animations" >Animations</option>
        <option value="music">Music</option>
      </select>

      <label htmlFor="">Cover Image</label>
      <input className='border-0 my-2' type="file" name="" id="" />
      <label htmlFor="">Upload Image</label>
      <input className='border-0 my-2' type="file" name="" id="" multiple  />
      <label htmlFor="desc">Descripton </label>
      <textarea name="desc" id="desc" cols="30" rows="10" placeholder='Breif description to intoduce  your service for customers '></textarea>

<button className='btn  text-light'>
Create
</button>
    </div>
    <div className="col-md-6 add-gig-right" >

    <label htmlFor="">Service Title</label>
    <input type="text" name="" id=""  placeholder='One Page Web Design'/>

    <label htmlFor=""> Short Description</label>
    <textarea name="" id="" cols="30" rows="8"  placeholder='Describe Yourself'></textarea>

    <label htmlFor="">Delivery Time</label>
    <input type="text" name="" id="" placeholder='One Page Web Design'/>

    <label htmlFor="">Revision Numbers</label>
    <input type="number" name="" id="" />

    <label htmlFor="">Add Features</label>
    <input type="text" name="" id="" placeholder='e.g  Web Design'/>
    <input type="text" name="" id="" placeholder='e.g  Web Design'/>
    <input type="text" name="" id="" placeholder='e.g  Web Design'/>
    <input type="text" name="" id="" placeholder='e.g  Web Design'/>
    </div>
  </div>
</div>
     </div>

     <Footer/>
      </div>
  )
}

export default Add