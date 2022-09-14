import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Categories from "../../../database/Categories.json";
import Facultiess from "../../../database/Faculties.json";
import FacultiesItem from "./FacultiesItem";

export default function Faculties() {

  let [active, setActive] = useState("all");
  let [count, setCount] = useState(12);
  let [array, setArray] = useState(Facultiess)

  let FilterHandler = (e) => {
    if(e === "all") {
      setActive(e)
      setArray(Facultiess)
    }else {
      setActive(e)
      setArray(Facultiess.filter((item) => item.cat === e))
    }

    setCount(12)
  }

  //display
  return (
    <section className="faculties">
      <div className="container">
        <div className="faculties__bigbox">
          <h1 className="faculties__title">Факультеты</h1>

          {/* //Categories   */}
          <ul className="faculties__clist">
            <li className="faculties__citem">
              <button
                onClick={() => FilterHandler("all")}
                className={`faculties__cbtn ${
                  active === "all" ? "faculties__cbtn-active" : null
                }`}
              >
                Все
              </button>
            </li>
            {Categories.map((item, key) => {
              return (
                <li key={key + 545} className="faculties__citem">
                  <button
                    onClick={() => FilterHandler(item.name)}
                    className={`faculties__cbtn ${
                      active === item.name ? "faculties__cbtn-active" : null
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* //Faculties */}
          <ul className="faculties__list">
            {array.map((item, key) => {
              if (key + 1 <= count) {
                return <FacultiesItem key={key + 897} item={item} />;
              }
            })}
          </ul>

          {/* //Yana + 12 item  */}
          <div className="faculties__btnbox">
            <button
              onClick={() => setCount(+count + 12)}
              className="faculties__btn"
            >
              Показать еще
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
