import React from 'react'
import Services from './Services'
import Servicesdata from './Servicesdata'

const Servicesmain = () => {
    return <>
        <div className="servicesdiv contentmargin" id='services'>
            <div className="skills servicesheading">
                <p data-aos="fade-left" >Services</p>
            </div>
            <p className="skillsline">
                We are Specialised in delivering the following Automation Services
            </p>
            <div className="services">

                {Servicesdata.map((val) => {
                    return <>
                        <Services
                            servicesno={val.servicesno}
                            service={val.service}
                        />
                    </>
                })}


            </div>


        </div>

    </>
}

export default Servicesmain
