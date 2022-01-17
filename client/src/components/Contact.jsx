import React, { useState } from 'react'
// import axios from 'axios'

const Contact = () => {
    const [Data,setData]=useState({
        name:"",
        email:"",
        message:""
    })

    const [Warnsign,setWarnsign]=useState(false)

    const Change=(event)=>{
        const {name,value}=event.target
        setData((preval)=>{
            return {
                ...preval,
                [name]:value
            }
        })
    }


    const Submit = async(event) => {
            event.preventDefault()
            console.log(Data)
            const {name,email,message}=Data

            if (name || email || message === "") {
                await setWarnsign(true)
            }
    
            const res=await fetch("/contactinfo",
            {   
                method: "POST",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({name,email,message})
            })
            // .then(function(res){ console.log(res) })
            // .catch(function(res){ console.log(res) })

            const response=await res.json()
            window.alert(response)

            setData({
                name:"",
                email:"",
                message:""
            })

    }




    return <>
        <div className="contactdiv contentmargin" id='contactus'>
        <div className="skills servicesheading">
            <p data-aos="fade-left" >GET IN TOUCH</p>
        </div>
        <p className="contactline">
            Are you ready to level up your automation game? Drop a message and let's discuss your automation needs
        </p>



        <div className="contact">
            <div className="contact1">
                <ul>
                <li>
                       <a href="tel:+353899892541">
                       <i class="fas fa-phone"></i>Call Us: <p>
                            +353899892541
                           </p>
                           </a> 
                    </li>
                    <li>
                       <a href="mailto:amol360@gmail.com">
                       <i class="far fa-envelope"></i>Mail Us: <p>amol360@gmail.com</p>
                           </a> 
                    </li>

                    <li>
                    <a><i class="fas fa-map-marker-alt"></i>Visit Us:
                    <p>IreLand Adress majestique aqua</p>
                    <p>"C" Wing 104</p>
                    </a>
                    </li>
                </ul>
            </div>



            <div className="contact2">
                <p className="contact2heading">
                    Have Something To Write?
                </p>
                
                <form className="contact2form" method="post">
                <input type="text" name="name" placeholder={Warnsign ? 
                "Plz Fill all the Fields (Your Name)"
                :"Your Name"} className="inputbox" onChange={Change} value={Data.name} required />
                <input type="email" name="email" placeholder={Warnsign ? 
                "Plz Fill all the Fields (Your Email)"
                :"Your Email"} className="inputbox" onChange={Change} value={Data.email} required /> 
                <textarea name="message" className="inputbox textarea" placeholder={Warnsign ? 
                "Plz Fill all the Fields (Your Message)"
                :"Your Message"} onChange={Change} value={Data.message} required />
                <button onClick={Submit} className="sendbutton">Send</button>
                </form>
            </div>

        </div>

        </div>
    </>
}

export default Contact
