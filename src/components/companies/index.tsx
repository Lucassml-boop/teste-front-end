import styles from "./companies.module.sass";
import brandLogo from "../../assets/images/logoBrands.svg";

export default function Brands() {
  const brandImages = Array(5).fill(brandLogo);

  return (
    <div className={styles.brandsWrapper}>
      {brandImages.map((image, index) => (
        <div key={index} className={styles.brandItem}>
          <img
            src={image}
            alt={`Brand Logo ${index + 1}`}
            width={211}
            height={221}
          />
        </div>
      ))}
    </div>
  );
}
