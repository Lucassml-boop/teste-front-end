"use client";

import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./products.module.sass";
import Modal from "../showcase/index";
import Slider from "./Slider";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductsProps {
  showCategories?: boolean;
}

export default function Products({ showCategories = true }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("CELULAR");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error(
            "Dados de produtos não estão no formato esperado:",
            data
          );
        }
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  const categories = [
    "CELULAR",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS",
  ];

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.sliderWrapper}>
      {showCategories && (
        <div className={styles.menu}>
          {categories.map((category) => (
            <div
              key={category}
              className={`${styles.menuItem} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
      <Slider products={products} onBuyClick={handleBuyClick} />
      {/* Modal */}
      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
