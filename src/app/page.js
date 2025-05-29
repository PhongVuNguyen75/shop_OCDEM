// src/app/page.js
import Header from "./components/header/header";
import ProductList from "./components/productlist/produtlist";
import Promotion from "./components/promotion/promotion";
import Address from "./components/address/address";
import Footer from "./components/footer/footer";
import SupportBox from "./components/supportbox/supportbox";
import styles from "./page.module.css";

export default function Home() {
  const productNames = [
    "Ốc Hương Cháy Tỏi", "Ốc Mỡ Xào Me", "Ốc Len Xào Dừa",
    "Sò Huyết Nướng Mỡ Hành", "Nghêu Hấp Sả", "Sò Điệp Nướng Phô Mai",
    "Ốc Bươu Nhồi Thịt", "Hàu Nướng Mỡ Hành", "Ốc Cà Na Xào Bơ Tỏi"
  ];

  const productPrices = [
    "89.000 VND", "75.000 VND", "80.000 VND",
    "95.000 VND", "60.000 VND", "100.000 VND",
    "85.000 VND", "70.000 VND", "78.000 VND"
  ];

  const productDescriptions = [
    "Ốc hương tươi, thơm lừng mùi tỏi, giòn giòn hấp dẫn",
    "Ốc mỡ đậm vị me, chua ngọt kích thích vị giác",
    "Ốc len béo ngậy, xào nước dừa thơm béo khó cưỡng",
    "Sò huyết tươi nướng mỡ hành, rắc hành phi giòn rụm",
    "Nghêu hấp sả thơm nức, ăn kèm muối tiêu chanh",
    "Sò điệp phủ phô mai béo ngậy, tan chảy trong miệng",
    "Ốc bươu nhồi thịt đậm đà, ăn là ghiền",
    "Hàu sữa nướng mỡ hành, thêm hành phi giòn tan",
    "Ốc cà na xào bơ tỏi thơm lừng, cay nhẹ bắt vị"
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.content}>
          <h1>🌙 Quán Ốc Đêm - Ngon Quên Lối Về</h1>
          <p>Giao hàng tận nơi từ 18h - 2h sáng • Ốc tươi mỗi ngày • Giá bình dân</p>
        </section>
        <ProductList
          productNames={productNames}
          productPrices={productPrices}
          productDescriptions={productDescriptions}
        />
      </main>
      <Promotion />
      <Address />
      <Footer />
      <SupportBox />
    </div>
  );
}
