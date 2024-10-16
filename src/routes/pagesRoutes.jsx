import React from 'react'
import { createBrowserRouter, ScrollRestoration } from 'react-router-dom'
import Homepage from '../pages/homePage.jsx'
import Aboutus from '../pages/aboutUsPage'
import Joincomms from '../pages/joinCommunity'
import Educator from '../pages/educatorPage'
import Testimonals from '../pages/testimonials.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/footer.jsx'
import ScrollToTop from '../components/scrollpage.jsx'

const routes = createBrowserRouter([
    {
        path:"/about",
        element:<> <ScrollToTop/> <Navbar /> <Aboutus /> <Footer/> </> 
    },
    {
        path:"/join",
        element:<> <Navbar /> <Joincomms />  <Footer/></> 
    },{
        path:"/educator",
        element:<> <ScrollToTop/><Navbar /> <Educator />  <Footer/></> 
    },{
        path:"/testimonials",
        element:<> <ScrollToTop/><Navbar /> <Testimonals/>  <Footer/></> 
    },{
        path:"/",
        element:<> <ScrollToTop/><Navbar /> <Homepage/>  <Footer/></> 
    },


])


export default routes



