import styles from "./title.module.sass";

type SectionTitleProps = {
  children: React.ReactNode;
  viewAllText?: string;
};

export default function SectionTitle({
  children,
  viewAllText,
}: SectionTitleProps) {
  return (
    <div className={styles.sectionTitleWrapper}>
      <div className={styles.sectionTitle}>
        <div className={styles.line}></div>
        <h2 className={styles.children}>{children}</h2>
        <div className={styles.line}></div>
      </div>
      {viewAllText && <p className={styles.viewAll}>{viewAllText}</p>}
    </div>
  );
}
