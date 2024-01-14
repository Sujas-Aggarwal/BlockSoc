import React from 'react'
import './Event.css'
function Event({Image="/src/assets/noImg.jpg" ,EventName="Not Available",Description="Description Not Available",isReversed=false}) {
    return (
    <div className='event'>
      <div className="wrapper" id={isReversed?"reverse":""}>
        <div className="left-div">
            <div className="img">
                <img src={Image} alt="" />
            </div>
            <div className="img-text">
                {EventName}
            </div>
        </div>
        <div className="right-div">
            {Description}
        </div>
      </div>
    </div>
  )
}

export default Event
