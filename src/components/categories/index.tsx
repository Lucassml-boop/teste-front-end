import { useState, useEffect } from "react";
import styles from "./categories.module.sass";

export default function Categories() {
  const [icons, setIcons] = useState<{ [key: string]: string }>({});
  const importIcons = async () => {
    const importedIcons: { [key: string]: string } = {
      tecnologia: (await import("/src/assets/images/tecnologia.svg")).default,
      supermercado: (await import("/src/assets/images/supermercado.svg"))
        .default,
      bebidas: (await import("/src/assets/images/bebidas.svg")).default,
      ferramentas: (await import("/src/assets/images/ferramentas.svg")).default,
      saude: (await import("/src/assets/images/saude.svg")).default,
      corrida: (await import("/src/assets/images/corrida.svg")).default,
      moda: (await import("/src/assets/images/moda.svg")).default,
    };
    setIcons(importedIcons);
  };

  useEffect(() => {
    importIcons();
  }, []);

  const categories = [
    { key: "tecnologia", label: "Tecnologia", active: true },
    { key: "supermercado", label: "Supermercado" },
    { key: "bebidas", label: "Bebidas" },
    { key: "ferramentas", label: "Ferramentas" },
    { key: "saude", label: "Saúde" },
    { key: "corrida", label: "Esportes" },
    { key: "moda", label: "Moda" },
  ];

  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category) => (
        <div key={category.key} className={styles.categoryWrapper}>
          <div
            className={`${styles.categoryCard} ${
              category.active ? styles.active : ""
            }`}
          >
            {icons[category.key] && (
              <img
                src={icons[category.key]}
                alt={category.label}
                width={48}
                height={48}
              />
            )}
          </div>
          <p className={styles.label}>{category.label}</p>
        </div>
      ))}
    </div>
  );
}
