import Image from "next/image";
import Abouts from "../../../database/About.json";
import AboutCount from "../../../database/AboutCount.json";
import AboutDiplom from "../../../database/AboutDiplom.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export default function About() {
  let [size, setSize] = useState("");

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
      console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
    }

    // console.log(size)
    window.addEventListener("resize", handleResize);
  });

  return (
    <section className="about">
      <div className="container">
        <div className="about__bigbox">
          <div className="about__top">
            <div className="about__top-box">
              <h2 className="about__top-title">Об университете</h2>
              <p className="about__top-text">
                Наша цель — качественное образование для твоей успешной карьеры
              </p>
            </div>
            <div>
              <Image
                className="about__top-img"
                src="/images/about/logo_synergy.svg"
                width="132"
                height="132"
              />
            </div>
          </div>

          <div className="about__desc">
            <p className="about__desc-text">
              В «Синергии» готовят высококлассных специалистов, востребованных в
              России и за рубежом. Построй профессиональное будущее вместе с
              нами.
            </p>
            <p className="about__desc-text">
              Более 30 лет в Синергии учат самым актуальным и востребованным
              профессиям. Мы даём знания, которые можно применить для развития
              своего бизнеса или работы в крупных компаниях.
            </p>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper about__list"
          >
            {Abouts.map((item, key) => {
              return (
                <SwiperSlide key={key + 426} className="about__item">
                  <h2 className="about__item-title">{item.title}</h2>
                  <p className="about__item-text">{item.desc}</p>
                  <div className="about__item-imgbox">
                    <Image
                      className="about__item-img"
                      src={item.icon}
                      width="88"
                      height="76"
                      layout="responsive"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper about__clist"
          >
            {AboutCount.map((item, key) => {
              return (
                <SwiperSlide key={key + 424} className="about__citem">
                  <p className="about__citem-count">{item.count}</p>
                  <p className="about__citem-desc">{item.text}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="about__license">
            <h2 className="about__license-title">Лицензия и аккредитации</h2>
            <ul className="about__license-list">
              {AboutDiplom.map((item, key) => {
                return (
                  <li key={key + 849} className="about__license-item">
                    <div className="about__license-imgbox">
                      <Image
                        className="about__license-img"
                        src="/images/about/diplom.svg"
                        width="97"
                        height="150"
                      />
                    </div>
                    <div className="about__license-box">
                      <h3 className="about__license-subtitle">{item.title}</h3>
                      <p className="about__license-desc">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
