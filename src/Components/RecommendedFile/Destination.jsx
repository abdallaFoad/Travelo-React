import React from 'react'
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";

export default function Destination(props) {
  return (
    <div className="destination">
      <img src={props.image} alt="Destination Img" />
      <h3>{props.title}</h3>
      <p>{props.subTitle}</p>
      <div className="info">
        <img src={info1} alt="Information1" />
        <img src={info2} alt="Information1" />
        <img src={info3} alt="Information1" />
      </div>
      <div className="distance">
        <span className='km'>1000 Kms</span>
        <span className='destDist'>{props.duration}</span>
      </div>
    </div>
  )
}
