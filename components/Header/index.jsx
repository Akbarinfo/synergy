import Image from "next/image";
import Link from "next/link";

//icons
import logo from "../../pages/images/logo.svg";
import { FiMenu } from "react-icons/fi";
import { TbSearch } from "react-icons/tb";
export default function Header() {
  let nav = [
    {
      title: "Абитуриентам",
    },
    {
      title: "Факультеты",
    },
    {
      title: "Специальности",
    },
    {
      title: "Студентам",
    },
    {
      title: "Об Университете",
    },
  ];

  let category = [
    {
      title: "Колледж",
    },
    {
      title: "Бакалавриат",
    },
    {
      title: "Магистратура",
    },
    {
      title: "Второе высшее",
    },
    {
      title: "Специалитет",
    },
    {
      title: "Аспирантура",
    },
    {
      title: "MBA",
    },
    {
      title: "Курсы",
    },
    {
      title: "Школа",
    },
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__bigbox">
            <Link href="/">
              <a>
                <Image className="header__logo" src={logo} alt="logo" />
              </a>
            </Link>

            <div className="header__box">
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {nav.map((item, key) => {
                    return (
                      <li key={key + 898} className="header__nav-item">
                        <Link href={"/"}>
                          <a className="header__nav-link">{item.title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="header__nav-box">
                  <form className="header__nav-form">
                    <input
                      className="header__nav-input"
                      type="text"
                      placeholder="Поиск по сайту"
                    />
                    <button className="header__nav-search">
                      <span>
                        <TbSearch />
                      </span>{" "}
                    </button>
                  </form>
                  <button className="header__nav-btn">
                    Меню <FiMenu className="header__nav-icon" />
                  </button>
                </div>
              </nav>

              <ul className="header__list">
                {category.map((item, key) => {
                  return (
                    <li key={key+741} className="header__item">
                      <Link href={"/"}>
                        <a className="header__link">{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
