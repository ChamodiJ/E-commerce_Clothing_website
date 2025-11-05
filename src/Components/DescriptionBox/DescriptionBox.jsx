import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>
          E-commerce is the buying and selling of products or services online
          through websites or apps. It allows customers to browse items, make
          secure payments, and have products delivered to their doorstep, making
          shopping convenient and accessible from anywhere.
        </p>
        <p>
          Beyond shopping, ShoppingClothing ensures a smooth user experience
          with features like order tracking, personalized recommendations, and
          customer support, making it easy for shoppers to make informed
          decisions. By combining a user-friendly frontend with a robust
          backend, our platform guarantees reliability, speed, and efficiency,
          helping customers save time while enjoying a modern, accessible, and
          safe way to shop for fashion online.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
