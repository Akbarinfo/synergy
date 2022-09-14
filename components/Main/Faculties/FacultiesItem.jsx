import Image from "next/image";
import Link from "next/link";

export default function FacultiesItem({item}) {
  return (
    <li className="faculties__item">
      <Link href={"/"}>
        <a>
          <div className="faculties__infobox">
            <h2 className="faculties__name">{item.title}</h2>
            <p className="faculties__count">{item.count} специальностей</p>
          </div>
          <div className="faculties__iconbox">
            <img className="faculties__icon"  src={item.icon} alt="" />
            {/* <Image
              className="faculties__icon"
              src={item.icon}
              alt={item.title}
              width={82}
              height={82}
              layout="responsive"
            /> */}
          </div>
        </a>
      </Link>
    </li>
  );
}
