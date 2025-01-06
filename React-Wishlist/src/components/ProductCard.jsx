import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import styles from './index.module.scss';

const ProductCard = ({ product, isFavourite, addToFavourites, removeFromFavourites, addToBasket }) => {
  const [isLiked, setIsLiked] = useState(isFavourite);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    if (isLiked) {
      removeFromFavourites(product.id);
    } else {
      addToFavourites(product.id);
    }
  };

  const handleAddToCart = () => {
    addToBasket(product);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <p className={styles.description}>{product.description.substring(0, 100)}...</p>
        <p className={styles.price}>${product.price}</p>
        <div className={styles.rating}>
          <span>★ {product.rating.rate} ({product.rating.count})</span>
        </div>
      </div>
      <div className={styles.cardActions}>
        <Link to={`/product/${product.id}`} className={styles.detailsButton}>
          Details
        </Link>
        <button className={styles.likeButton} onClick={handleLike}>
          {isLiked ? <FaHeart className={styles.liked} /> : <FaRegHeart />}
        </button>
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
  