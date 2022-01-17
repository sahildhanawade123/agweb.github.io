import React,{useState} from 'react'


const Countup = (props) => {



    return <>
        <div className="countup">
        <img src={props.icon} alt="" style={{width:"3cm"}} />

        <div className="num" style={{transform:'translate('+props.translateleft+'cm)'}}>

        <div className="numabsolute" style={{top:props.top,left:props.numleft}} data-aos="slide-down" data-aos-duration={props.duration} >
            <p>8</p>
            <p>7</p>
            <p>6</p>
            <p>5</p>
            <p>4</p>
            <p>3</p>
            <p>2</p>
            <p>1</p>
        </div>

        <p style={{marginLeft:"2.1cm",marginTop:".22cm",position:"absolute"}}>+ {props.time}</p>

        {/* <CountUp start={focus ? 0 : null} end={props.end} suffix='+ yrs' duration={1} redraw={true}>
            {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                    if (isVisible) { setFocus(true); }
                }}>
                     <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp> */}



    </div>


            <p className="name">{props.name}</p>
            <p className="name">{props.p1}</p>
            <p className="name">{props.p2}</p>
            <p className="name">{props.p3}</p>
        </div>
    </>
}

export default Countup
