import { useState, useEffect } from "react";
import {
  PiShieldCheck,
  PiTruck,
  PiCreditCard,
  PiMagnifyingGlass,
  PiX,
  PiList,
  PiCrownSimpleBold,
} from "react-icons/pi";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import styles from "./header.module.sass";
import Vector from "../../assets/images/vector.svg";
import Logo from "../../assets/images/Logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    "OFERTAS DO DIA"
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 480);
      
      if (width > 800) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const topBarItems = [
    {
      icon: <PiShieldCheck />,
      text: "Compra 100% segura",
      shortText: "100% segura",
      highlight: "100% segura",
    },
    {
      icon: <PiTruck />,
      text: "Frete grátis acima de R$ 200",
      shortText: "Frete grátis",
      highlight: "Frete grátis",
    },
    {
      icon: <PiCreditCard />,
      text: "Parcele suas compras",
      shortText: "Parcele",
      highlight: "Parcele",
    },
  ];

  const categories = [
    "TODAS CATEGORIAS",
    "SUPERMERCADO",
    "LIVROS",
    "MODA",
    "LANÇAMENTOS",
    "OFERTAS DO DIA",
    "ASSINATURA",
  ];

  return (
    <header className={styles.headerContainer}>
      <div className={styles.topBar}>
        {topBarItems.map((item, index) => (
          <div key={index} className={styles.topBarItem}>
            {item.icon}
            <p>
              {isMobile ? (
                <span className={styles.highlight}>{item.shortText}</span>
              ) : (
                <>
                  {item.text.split(item.highlight)[0]}
                  <span className={styles.highlight}>{item.highlight}</span>
                  {item.text.split(item.highlight)[1]}
                </>
              )}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.mainBar}>
        <div className={styles.logoContainer}>
          <img
            src={Logo}
            width={153}
            height={46}
            alt="Logo Econverse"
            className={styles.logo}
          />
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="O que você está buscando?"
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <PiMagnifyingGlass />
          </button>
        </div>
        <div className={styles.iconSet}>
          <img
            src={Vector}
            width={24}
            height={24}
            alt="Vector"
            className={styles.vectorIcon}
          />
          <FaRegHeart width={32} height={32} className={styles.icon} />
          <FaRegUserCircle width={32} height={32} className={styles.icon} />
          <TbShoppingCart width={32} height={32} className={styles.icon} />
          <button className={styles.hamburgerButton} onClick={toggleMenu}>
            {isMenuOpen ? <PiX /> : <PiList />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.modal}>
          <nav className={styles.navBar}>
            {categories.map((category, index) => (
              <p
                key={index}
                className={
                  category === activeCategory ? styles.activeCategoryBar : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category === "ASSINATURA" && (
                  <span className={styles.iconWithText}>
                    <PiCrownSimpleBold />
                    {category}
                  </span>
                )}
                {category !== "ASSINATURA" && category}
              </p>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
