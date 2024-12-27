import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import styles from "./index.module.scss"

const ProductCard = ({ product, isFavourite, addToFavourites, removeFromFavourites }) => {
  const [isLiked, setIsLiked] = useState(isFavourite);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      removeFromFavourites(product.id);
    } else {
      addToFavourites(product.id);
    }
  };

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="rating">
        <span>{product.rating.rate} ({product.rating.count})</span>
      </div>
      <div onClick={handleLike}>
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  );
};

export default ProductCard;
