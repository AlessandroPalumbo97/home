import React from 'react';

import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
  
  const style = useSpring({opacity: 1, from: {opacity: 0}})

  console.log(props.id);

  return(
    <animated.div className="my-card-info" style={style}>
      <p className="my-card-title font-reross-quad">{props.title}</p>
      <p className="my-card-sub-title">{props.subTitle}</p>
      {props.downloadable ? <a href={props.link} target="_blank" rel="noopener noreferrer">Download</a> : <a href={props.link} rel="noopener noreferrer">View</a>}
    </animated.div>
  )
}

export default CardInfo;