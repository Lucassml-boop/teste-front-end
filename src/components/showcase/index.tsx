import styles from "./showcase.module.sass";
import React, { useState } from "react";
import IconClose from "../../assets/images/iconClose.svg";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!isOpen) return null;

  return (
    <div className={`${styles.modal} ${isOpen ? styles.show : ""}`}>
      <div className={styles.modalContent}>
        <img
          src={product.photo}
          alt={product.productName}
          className={styles.productImage}
        />
        <button className={styles.closeButton} onClick={onClose}>
          <img src={IconClose} alt="Close" />
        </button>
        <div>
          <h2 className={styles.productName}>{product.productName}</h2>
          <p className={styles.price}>R${product.price.toFixed(2)}</p>
          <p className={styles.descriptionShort}>
            Many desktop publishing packages and web page editors<br></br> now
            many desktop publishing
          </p>
          <p className={styles.linkDetails}>
            Veja mais detalhes do produto &gt;
          </p>
          <div className={styles.containerQuantity}>
            <div className={styles.quantityContent}>
              <button
                className={styles.quantityButton}
                onClick={handleDecrement}
              >
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                className={styles.quantityButton}
                onClick={handleIncrement}
              >
                +
              </button>
              <div> </div>
            </div>
            <button className={styles.buyButton}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
