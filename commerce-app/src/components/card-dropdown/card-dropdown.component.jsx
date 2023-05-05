import React from 'react'
import Button from '../button/button.componnet';

const CardDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className="card-items"></div>
        <Button buttonType="paymentButton">Payment</Button>
    </div>
  )
}

export default CardDropdown;