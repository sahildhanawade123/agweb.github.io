import React from 'react'
import Countup from './Countup'
import Countupdata from './Countupdata'

const Countupmain = () => { 
    return <>\
    <div className="countupmaindivext" id='experience'>
    <div className="skills experience">
    <p data-aos="fade-left" >Experience</p>
    </div>
    <p className="skillsline experienceline">
        Our Experience in the Automation Industry
    </p>
    <div className="countupmaindiv">
        {Countupdata.map((val)=>{
            return <>
            <Countup
                icon={val.icon}
                top={val.top}
                name={val.name}
                p1={val.p1}
                p2={val.p2}
                p3={val.p3}
                time={val.time}
                translateleft={val.translateleft}
                numleft={val.numleft}
                duration={val.duration}
            />
            </>
        })}
    </div>
    </div>
    </>
}

export default Countupmain
