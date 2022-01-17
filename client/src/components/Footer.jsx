import React from 'react'

const Footer = () => {
    return <>
    <div className="footerdiv">
        <div className="footercontact">
            <p className="footerheading">
                GET IN TOUCH
            </p>
            <div className="contact1 footercontactinfo" >
                <ul >
                <li >
                       <a href="tel:+353899892541" style={{color:"#cacaca"}}>
                       <i class="fas fa-phone"></i>Call Us: <p className='footerp' style={{color:"#cacaca"}}>
                            +353899892541
                           </p>
                           </a> 
                    </li>
                    <li>
                       <a href="mailto:amol360@gmail.com" style={{color:"#cacaca"}}>
                       <i class="far fa-envelope"></i>Mail Us: <p className='footerp' style={{color:"#cacaca"}}>amol360@gmail.com</p>
                           </a> 
                    </li>

                    <li>
                    <a href="" style={{color:"#cacaca"}}><i class="fas fa-map-marker-alt"></i>Visit Us:
                    <p className='footerp' style={{color:"#cacaca"}}>Ireland Adress Majestique aqua</p>
                    <p style={{color:"#cacaca"}}>"C" Wing 104</p>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footeraboutme">
        <p className="footerheading">
                ABOUT ME
            </p>
            <p className="footeraboutmepara">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vero inventore necessitatibus veritatis debitis accusantium optio. Quos 
            </p>
        </div>
    </div>
    </>
}

export default Footer
