import React from 'react'
import Progressbardata from './Progressbardata'
import Progressbar from './Progressbar'

const Progressbarmain = () => {
    return <>
    <div className="progressbarmainext contentmargin" id='skills'>
        <div className="skills">
    <p data-aos="fade-left">Skills</p>
    </div>
    <p className="skillsline">
        The toolkit We use to help with your automation needs
    </p>
    <div className="progressbarmain">
        {Progressbardata.map((val)=>{
            return <>
            <Progressbar
                name={val.name}
                color={val.color}
                left={val.left}
            />
            </>
        })}
    </div>
    </div>
    </>
}

export default Progressbarmain
