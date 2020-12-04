import React from 'react';

import CardInfo from '../components/CardInfo';

const card = (props) => {
  return (
    <div className="d-inline-block my-card" onClick={(e) => props.click(props.item)}>
      <img className="my-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
      { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} downloadable={props.item.downloadable}/> }
    </div>
  );
}

export default card;