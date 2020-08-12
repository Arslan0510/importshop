import React from 'react';
import './cardStyle.css';

function card(props) {
  return (
    <div className='card text-center shadow '>
      <div className='overflow'>
        <img src={props.image} alt='' className='card-img-top' />
      </div>
      <div className='card-body text-dark'>
        <h4 className='card-title'>{props.cardTitle}</h4>
        <p>{props.description}</p>
        <a href='#' className='btn btn-outline-success'>
          Go Anywhere
        </a>
      </div>
    </div>
  );
}

export default card;
