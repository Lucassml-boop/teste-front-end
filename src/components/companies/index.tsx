import { useState, useEffect } from "react";
import styles from "./companies.module.sass";
import brandLogo from "../../assets/images/logoBrands.svg";

export default function Brands() {
  const [visibleBrands, setVisibleBrands] = useState(5);
  const brandImages = Array(5).fill(brandLogo);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1320) {
        setVisibleBrands(3);
      } else {
        setVisibleBrands(5);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.brandsWrapper}>
      {brandImages.slice(0, visibleBrands).map((image, index) => (
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
