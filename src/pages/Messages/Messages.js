import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Messages.css'
import { Link } from 'react-router-dom'
function Messages() {


  const message=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatibus delectus reprehenderit, "
  return (
    <>
    <Navbar/>
   
        <div className='container'>
    <div className='messages-container'>  
        <div className='title'>
        <h1>Messages</h1>
        </div>
        <table >
            <tr>
                <th>Buyer</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
                
            </tr>
            <tr className='active-message'>
                <td> JOHN</td>
                <td><Link to="/message" className="link">{message}</Link></td>
                <td>1 Day Ago</td>
                
                <td>
                  <button className="btn text-light">Mark as Read</button>
                </td>
                
            </tr>
    
            <tr className='active-message'>
                <td> JOHN</td>
                <td><Link to="/message" className="link">{message}</Link></td>
                <td>1 Day Ago</td>
                <td>
                  <button className="btn text-light">Mark as Read</button>
                </td>
                
            </tr>

            <tr>
                <td> JOHN</td>
                <td><Link to="/message" className="link">{message}</Link></td>
                <td>1 Day Ago</td>
              
                
            </tr>

            <tr>
                <td> JOHN</td>
                <td><Link to="/message" className="link">{message}</Link></td>
                <td>1 Day Ago</td>
               
                
            </tr>

            <tr>
                <td> JOHN</td>
                <td><Link to="/message" className="link">{message}</Link></td>
                <td>1 Day Ago</td>
                
                
            </tr>

            <tr>
                <td> JOHN</td>
                <td><Link to="/message" className="link">{message}</Link></td>
                <td>1 Day Ago</td>
                
                
            </tr>
        </table>
    </div>
        </div>
    
    <Footer/>
        </>
  )
}

export default Messages