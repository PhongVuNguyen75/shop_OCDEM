import styles from "./chitietsanpham.module.css";
export default function ChiTietSanPham() {
    return (
        <div className={styles.chitietsanpham}>
           <div className={styles.mainContent}>
                <div className={styles.hinhanh}></div>
                <div className={styles.mota}></div>
           </div>
        </div>
    );
}
