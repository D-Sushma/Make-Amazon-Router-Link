// import card.css bcz we want to same desing as a card.js
import React from 'react'
import '../Card.css'

export default function Shirt() {
  return (
    <div className='card-parent'>
      <div>Shirt</div>
      <div className='card-container'>

        <div className='card-image'>
          <img src="" alt="img" />
        </div>
        <div className='card-details'>
          <div className='title'>{ }</div>
          <div className='price'>{ }</div>
          <div className='quantity'>{ }</div>
          <div className='star'>✰✰✰✰✰</div>
          <button className='card-btn'>Add to card</button>
        </div>

      </div>
    </div>
  )
}


