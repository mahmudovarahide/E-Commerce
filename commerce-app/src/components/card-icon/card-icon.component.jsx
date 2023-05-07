import React, { useContext } from 'react';
import { ReactComponent as CardIconSvg } from '../../images/shopping-bag.svg';
import { CardContext } from '../../context/card.context';

const CardIcon = ({ onClick }) => {
  const {isCardOpen, setIsCardOpen,cardCount}=useContext(CardContext);
  const toggleIsOpen =()=>setIsCardOpen(!isCardOpen);
  return (
    <div className='card-icon-container' onClick={toggleIsOpen}>
        <CardIconSvg className='shopping-card-icon' onClick={onClick}/>
        <span className='count-item'>{cardCount}</span>
    </div>
  )
}

export default CardIcon;