import React, { useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import {Helmet} from "react-helmet"

import Progressbarmain from "./components/Progressbarmain"
import Countupmain from "./components/Countupmain";
import Servicesmain from "./components/Servicesmain";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";


const Home = () => {


    useEffect(() => {
        Aos.init({
            offset: 80,
            duration: 600,
            easing: 'ease-in-out',
            // delay: 1000,
            once:true
        })

    }, [])

    

    return <>

        <Helmet>
            <title>AG PROCESS AUTOMATION AND CONTROL LTD</title>
        </Helmet>

        <Navbar1/> 

        <Aboutme/>

        <Progressbarmain/>

         <Countupmain/>

        <Servicesmain/>

        <Contact/> 

        <Footer/>


    </>
}


export default Home