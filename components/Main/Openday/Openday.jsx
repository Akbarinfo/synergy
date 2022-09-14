import Link from "next/link";

export default function OpenDay() {
  return (
    <section className="openday">
      <div className="container">
        <div className="openday__box">
          <h2 className="openday__title">День открытых дверей онлайн</h2>
          <p className="openday__text">
            Узнайте все об университете «Синергия», не выходя из дома!
          </p>

          <Link href={"/"}>
            <a className="openday__link">Отправить заявку</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
