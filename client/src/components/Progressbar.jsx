import React from "react";

const Progressbar = (props) => {
    return <>
        <div data-aos="fade-left" className="progressdiv">
            <div data-aos="slide-right" className="skillname">
                {props.name}
            </div>
            <div className="skillbar">
                <div data-aos-delay={600} data-aos="slide-right" className="skillbarabsolute" style={{ left: props.left, backgroundColor: props.color }}></div>
            </div>
        </div>
    </>
}

export default Progressbar