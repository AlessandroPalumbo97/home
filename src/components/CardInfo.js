import React from 'react';

import { useSpring, animated } from 'react-spring';

function CardInfo(props) {
  
  const style = useSpring({opacity: 1, from: {opacity: 0}})

  return(
    <animated.div className="my-card-info" style={style}>
      <p className="my-card-title font-reross-quad">{props.title}</p>
      <p className="my-card-sub-title">{props.subTitle}</p>
      <p class="my-card-link mt-1">{props.downloadable ? <a href={props.link} target="_blank" rel="noopener noreferrer">Download for Windows</a> : <a href={props.link} rel="noopener noreferrer">View</a>}</p>
    </animated.div>
  )
}

export default CardInfo;