import Image from "next/image";

//icons
import { TbHandFinger } from "react-icons/tb";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__bigbox">
          <div className="hero__box">
            <h2 className="hero__title">ОБРАЗОВАНИЕ ДЛЯ КАРЬЕРЫ</h2>
            <p className="hero__text">
              Пройди тест и узнай, на кого тебе лучше учиться!
            </p>
            <button className="hero__btn">
              Подобрать программу <TbHandFinger />
            </button>
          </div>

          <div className="hero__imgbox">
            <Image
              className="hero__img"
              src="/images/hero/hero_girl.png"
              width="680"
              height="568"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
