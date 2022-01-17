import React,{useState} from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

const Navbar1 = () => {
    const [Bars,setBars]=useState(false)

    return <>
    
    <div className="coverimg">
            <nav className="nav">
                <div className="navdiv1">
                    LOGO
                </div>
                <div className={Bars?"mobnav" : "navdiv2"}>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#aboutus">About Us</a></li>
                        <li className="contactmebutton"><a href="#contactus">Contact Us</a></li>
                    </ul>
                </div>

                <div className="bars" onClick={()=>{setBars(!Bars)}}>
                    {Bars? <ClearSharpIcon/>  : <MenuRoundedIcon/>}
                        
                    </div>
            </nav>
            <div className="coverinfo">
                <div className="coverp">
                    <pre >
                        AG PROCESS AUTOMATION AND CONTROL LTD
                    </pre>
                    <p data-aos-duration={1400} data-aos="zoom-out-right" >
                        Leading Pharma Automation Services Provider
                    </p>
                </div>
                <div className="agimg">
                    <img src="images/agimg.png" alt="" />
                </div>
            </div>
        </div>

    
    </>
}

export default Navbar1
