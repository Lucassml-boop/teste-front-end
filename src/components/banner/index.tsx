import styles from "./banner.module.sass";
import Banner from "/src/assets/images/banner.svg";
import BannerShadow from "/src/assets/images/bannerShadow.svg";

export default function banner() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.bannerWrapper}>
        <img src={Banner} alt="Banner" className={styles.bannerImage} />
        <img
          src={BannerShadow}
          alt="Banner Shadow"
          className={styles.bannerShadow}
        />
        <div className={styles.textOverlay}>
          <h1>
            Venha conhecer nossas
            <br />
            promoções
          </h1>
          <h2>
            <span className={styles.highlight}>50% off</span> nos produtos
          </h2>
          <button className={styles.ctaButton}>Ver produto</button>
        </div>
      </div>
    </div>
  );
}
