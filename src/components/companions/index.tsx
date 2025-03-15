import styles from "./companions.module.sass";
import ParceirosPhoto from "../../assets/images/parceiros.svg";

export default function Parceiros() {
  return (
    <div className={styles.parceirosContainer}>
      <div className={styles.parceiroItem}>
        <img
          src={ParceirosPhoto}
          alt="Parceiros"
          width={634}
          height={350}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <h2 className={styles.title}>Parceiros</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <button className={styles.button}>CONFIRA</button>
        </div>
      </div>
      <div className={styles.parceiroItem}>
        <img
          src={ParceirosPhoto}
          alt="Parceiros"
          width={634}
          height={350}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <h2 className={styles.title}>Parceiros</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur.
          </p>
          <button className={styles.button}>CONFIRA</button>
        </div>
      </div>
    </div>
  );
}
