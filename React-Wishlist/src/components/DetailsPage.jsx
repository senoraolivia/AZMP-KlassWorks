import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import productsData from '../data/productsData';
import { FavouritesContext } from '../context/FavouritesContext';
import styles from "./index.module.scss";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find(p => p.id === parseInt(id));
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

  if (!product) {
    return <div className={styles.detailPage}>Product not found</div>;
  }

  const isFavourite = favourites.includes(product.id);

  const handleLike = () => {
    if (isFavourite) {
      removeFromFavourites(product.id);
    } else {
      addToFavourites(product.id);
    }
  };

  return (
    <div className={styles.detailPage}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        &larr; Back
      </button>
      <div className={styles.productDetail}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.productInfo}>
          <h1>{product.title}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.category}>Category: {product.category}</p>
          <div className={styles.rating}>
            <span>★ {product.rating.rate}</span>
            <span>({product.rating.count} reviews)</span>
          </div>
          <button onClick={handleLike} className={styles.favouriteButton}>
            {isFavourite ? (
              <>
                <FaHeart /> Remove from Favourites
              </>
            ) : (
              <>
                <FaRegHeart /> Add to Favourites
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

