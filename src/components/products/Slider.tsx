import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./products.module.sass";
import { Navigation } from "swiper/modules";
import LeftArrow from "../../assets/images/arrow-left.svg";
import RightArrow from "../../assets/images/arrow-right.svg";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface SliderProps {
  products: Product[];
  onBuyClick: (product: Product) => void;
}

export default function Slider({ products, onBuyClick }: SliderProps) {
  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.swiperButtonPrev}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={LeftArrow} width={40} height={40} alt="Arrow Left" />
      </div>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4.5}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            600: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1020: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className={styles.productCard}>
                <img
                  src={product.photo}
                  alt={product.productName}
                  width={270}
                  height={200}
                  className={styles.productImage}
                />
                <p className={styles.productName}>{product.productName}</p>
                <p className={styles.oldPrice}>
                  R$ {(product.price * 1.2).toFixed(2)}
                </p>
                <p className={styles.newPrice}>R$ {product.price.toFixed(2)}</p>
                <p className={styles.installments}>
                  ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
                </p>
                <p className={styles.freeShipping}>Frete grátis</p>
                <button
                  className={styles.buyButton}
                  onClick={() => onBuyClick(product)}
                >
                  Comprar
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={styles.swiperButtonNext}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={RightArrow} width={40} height={40} alt="Arrow Right" />
      </div>
    </div>
  );
}
