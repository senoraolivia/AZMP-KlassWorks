import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../data/productsData';
import styles from "../components/index.module.scss";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData.find(p => p.id === parseInt(id || ''));

  if (!product) {
    return <div>Product not found</div>;
  }

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
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

