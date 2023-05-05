import React from 'react';
import { ReactComponent as CardIconSvg } from '../../images/shopping-bag.svg';

const CardIcon = ({ onClick }) => {
  return (
    <div className='card-icon-container'>
        <CardIconSvg className='shopping-card-icon' onClick={onClick}/>
        <span className='count-item'>0</span>
    </div>
  )
}

export default CardIcon;