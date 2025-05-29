// src/components/products/ProductList.js
import React from "react";
import Image from "next/image";
import styles from ".//productlist.module.css";

const ProductList = ({ productNames, productPrices, productDescriptions }) => {
  return (
    <section className={styles.products}>
      <h2>Các Loại  Trái Cây </h2>
      <div className={styles.productGrid}>
        {Array(9).fill().map((_, index) => (
          <div key={index} className={styles.productItem}>
            <Image
              src={`/images/anh${index + 1}.jpg`}
              alt={`Sản phẩm ${index + 1}`}
              width={300}
              height={300}
            />
            <p>{productNames[index]}</p>
            <p className={styles.productPrice}>{productPrices[index]}</p>
            <p className={styles.productDescription}>{productDescriptions[index]}</p>
            <button className={styles.buyButton}>Mua ngay</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
