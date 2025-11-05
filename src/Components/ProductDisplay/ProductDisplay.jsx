import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          {[...Array(4)].map((_, i) => (
            <img key={i} src={product.image} alt={`${product.name} Thumbnail`} />
          ))}
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>

      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          {[...Array(4)].map((_, i) => <img key={i} src={star_icon} alt="Star" />)}
          <img src={star_dull_icon} alt="Empty Star" />
          <p>(122)</p>
        </div>

        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-price-old'>${product.old_price}</div>
          <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>

        <div className='productdisplay-right-description'>
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>

        <div className='productdisplay-right-size'>
          {["S","M","L","XL","XXL"].map(size => <div key={size}>{size}</div>)}
        </div>

        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className='productdisplay-right-category'>
          <span>Category :</span> {product.category}
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
