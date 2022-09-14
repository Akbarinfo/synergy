import { useEffect, useState } from "react";
import Formss from "../../../database/Forms.json";
import FormsText from "../../../database/FormsText.json";

export default function Forms() {
  let [active, setActive] = useState("Очная");
  let [array, setArray] = useState();


  useEffect(() => {
    setArray(
      FormsText.map((item) => {
        if (active === item.cat) {
          return item.text;
        }
      })
    );
  }, [active]);

  return (
    <section className="forms">
      <div className="container">
        <div className="forms__bigbox">
          <div className="forms__box">
            <h2 className="forms__title">Формы обучения</h2>
            <p className="forms__text">
              Совмещайте работу с учебой и участвуйте в образовательном процессе
              в комфортном формате
            </p>
          </div>

          <div className="forms__boxs">
            <ul className="forms__list">
              {Formss.map((item, key) => {
                return (
                  <li key={key + 356} className="forms__item">
                    <button
                      onClick={() => setActive(item.name)}
                      className={`forms__btn ${
                        active === item.name ? "forms__btn-active" : "forms__btns"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="forms__descbox">
              <p className="forms__desc">{array}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
