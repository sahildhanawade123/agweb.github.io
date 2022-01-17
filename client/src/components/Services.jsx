import React from 'react'

const Services = (props) => {
    return <>
        
                <div className="servicescard" data-aos="zoom-in-up" data-aos-duration={900} >
                    <div className="servicesno">
                        {props.servicesno}
                    </div>
                    <div className="servicespara">
                        {props.service}
                    </div>
                </div>
            


    </>
}

export default Services
