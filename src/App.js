import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Gigs from '../src/pages/Gigs/Gigs';
import Home from './pages/Home/Home';
import Footer from './pages/Footer/Footer';
import Messages from './pages/Messages/Messages';
import Register from './pages/Register/Register';
import Add from './pages/Add/Add';
import Login from './pages/Login/Login';
import Gig from './pages/Gig/Gig';
import Orders from './pages/Orders/Orders'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import Logout from './pages/Logout/Logout';
import MyGigs from './components/MyGigs/MyGigs';
import  Message  from './pages/Message/Message'
function App() {

  
  const Layout = () => {
    return (
      <div clasName='app'>
        <Navbar />
        <Outlet />
       <Home/>
        <Footer />
      </div>
    )
  }

  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/footer',
          element: <Footer />
        },
        {
          path: '/login',
          element: <Login />
        },
       
        {
          path: '/register',
          element: <Register />
        },
        {
          path: '/logout',
          element: <Logout/>
        },
      ]
    },

    {
      path: '/allgigs',
      element: <Gigs />
    },
    {
      path: '/newgig',
      element: <Gig />
    },

    {
      path: '/mygigs',
      element: <MyGigs/>
      
    },

    {
      path: '/orders',
      element: <Orders/>,
      
    },
    {
      path: '/add',
      element: <Add />
    },
    {
      path: '/messages',
      element: <Messages />
    },
    {
      path: '/message',
      element: <Message/>
    },
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={routers} />
    </React.Fragment>
  );
}

export default App;
