import Image from "next/image";
import Admissions from "../../../database/Admission.json";

export default function Admission() {
  return (
    <section className="admission">
      <div className="container">
        <div className="admission__box">
          <h2 className="admission__title">Приемная кампания 2022</h2>
          <p className="admission__text">
            Начните обучение когда вам удобно: поступить в Университет
            «Синергия» можно в течение всего года
          </p>
          <ul className="admission__list">
            {Admissions.map((item, key) => {
              return (
                <li key={key + 634} className="admission__item">
                  <div className="admission__item-box">
                    <h3 className="admission__subtitle">{item.title}</h3>
                    <p className="admission__desc">{item.desc}</p>
                  </div>
                  <div className="admission__imgbox">
                    <Image
                      className="admission__img"
                      src={item.icon}
                      width="88"
                      height="76"
                      layout="responsive"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
