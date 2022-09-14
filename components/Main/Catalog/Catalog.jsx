import { PatternFormat } from "react-number-format";
import { useState } from "react";

//icon
import { RiCheckboxBlankLine } from "react-icons/ri";
import { RiCheckboxLine } from 'react-icons/ri'

export default function Catalog() {

  let [active, setActive] = useState(true)

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__box">
          <h2 className="catalog__title">Каталог образовательных программ</h2>
          <p className="catalog__text">
            Мы собрали подробную информацию о факультетах, студенческой жизни и
            трудоустройстве.
          </p>
          <form className="catalog__form">
            <input
              className="catalog__input"
              type="text"
              name=""
              id=""
              placeholder="Имя"
            />
            <PatternFormat
              className="catalog__input"
              format="+# (###) #### ###"
              allowEmptyFormatting
              mask="_"
            />

            <input
              className="catalog__input"
              type="email"
              name=""
              id=""
              placeholder="Почта"
            />
            <button className={`catalog__btns ${active ? "catalog__btn" : "catalog__btn-active"}`} disabled={active}>
              Получить каталог
            </button>
          </form>
          <label className="catalog__checkboxs" htmlFor="catacheck">
            <input
              onClick={() => setActive(!active)}
              className="catalog__checkbox"
              type="checkbox"
              id="catacheck"
            />
            {active ? <RiCheckboxBlankLine className="catalog__icon" /> : <RiCheckboxLine className="catalog__icon" />}

            <p className="catalog__checktext">
              Я даю согласие на обработку персональных данных, согласен на
              получение информационных рассылок от Университета «Синергия» и
              соглашаюсь c политикой конфиденциальности.
            </p>
          </label>
        </div>
      </div>
    </section>
  );
}
