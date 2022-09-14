import Link from "next/link";

//style

//icons
import { IoEye } from "react-icons/io5";

function TopHeader() {
  return (
    <section className="topheader">
      <div className="container">
        <div className="topheader__bigbox">
          <Link href="/">
            <a className="topheader__link">
              Сведения об образовательной организации
            </a>
          </Link>

          <div className="topheader__box">
            <div className="topheader__telbox">
              <Link href="tel: +74958001001">
                <a className="topheader__tel">+7 495 800–10–01</a>
              </Link>
              <Link href="tel: +88001000011">
                <a className="topheader__tel">+8 800 100–00–11</a>
              </Link>
            </div>
            <button className="topheader__btn">
              <IoEye />  <span className="topheader__span"> Версия для слабовидящих</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopHeader;
