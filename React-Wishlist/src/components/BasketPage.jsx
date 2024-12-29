import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
// import styles from './BasketPage.module.scss';

const BasketPage = () => {
  const { basket, updateProductQuantity, removeFromBasket } = useContext(ProductsContext);

  const totalPrice = basket.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.basketPage}>
      <h1>Your Basket</h1>
      <table className={styles.basketTable}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <button onClick={() => updateProductQuantity(item.id, 'increase')}>+</button>
                {item.quantity}
                <button onClick={() => updateProductQuantity(item.id, 'decrease')}>-</button>
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <button onClick={() => removeFromBasket(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.totalPrice}>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default BasketPage;
