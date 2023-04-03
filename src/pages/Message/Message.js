import React from 'react'
import './Message.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Message() {
    return (
        <div className='message'>

 <Link to="/messages" className="link-sticky">
                    <span className="breadcrumbs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                            <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
                        </svg> Back 
                    </span>
                </Link>

            <div className="container">

                <div className="message-container">
                    <div className="items">
                        <img src="https://www.shutterstock.com/image-vector/one-incoming-message-open-icon-260nw-1097766755.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolores aliquam illum aliquid ut hic repellat dolore quisquam consequatur assumenda.
                        </p>
                    </div>


                    <div className="items2">
                        <img src="https://www.shutterstock.com/image-vector/one-incoming-message-open-icon-260nw-1097766755.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolores aliquam illum aliquid ut hic repellat dolore quisquam consequatur assumenda.
                        </p>
                    </div>
                    <div className="items2">
                        <img src="https://www.shutterstock.com/image-vector/one-incoming-message-open-icon-260nw-1097766755.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolores aliquam illum aliquid ut hic repellat dolore quisquam consequatur assumenda.
                        </p>
                    </div>

                    <div className="items">
                        <img src="https://www.shutterstock.com/image-vector/one-incoming-message-open-icon-260nw-1097766755.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolores aliquam illum aliquid ut hic repellat dolore quisquam consequatur assumenda.
                        </p>
                    </div>
                    <div className="items">
                        <img src="https://www.shutterstock.com/image-vector/one-incoming-message-open-icon-260nw-1097766755.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolores aliquam illum aliquid ut hic repellat dolore quisquam consequatur assumenda.
                        </p>
                    </div>
                </div>
            </div>
            <div className="write">
                        <div className="message-textarea">
                            <textarea name="" placeholder='write your message here' id="" cols="90" rows="5"></textarea>
                        </div>
                        <button className='btn text-light'>Send</button>
                    </div>

                    <Footer/>
        </div>
    )
}

export default Message