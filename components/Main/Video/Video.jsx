import Image from "next/image";
import { useState } from "react";

export default function MainVideo() {
  let [active, setActive] = useState(false);

  return (
    <section className="mvideo">
      <div className="container">
        {active ? (
          <div className="mvideo__box">
            <iframe
              className="mvideo__img"
              src="https://www.youtube.com/embed/yXjpWycBOR4?autoplay=1"
              frameborder="0"
              allowfullscreen="allowfullscreen"
              loading="lazy"
              title="Видео блок"
              allow="autoplay"
            ></iframe>
          </div>
        ) : (
          <div className="mvideo__box" onClick={() => setActive(true)}>
            <h2 className="mvideo__title">Смотрите видео об Университете</h2>
            <div className="mvideo__imgbox">
              <Image
                className="mvideo__img"
                src={"/images/mainVideo/bg.jpg"}
                width="1440"
                height="800"
                layout="responsive"
              />
            </div>
            <div className="mvideo__playbox">
              <Image
                className="mvideo__play"
                src={"/images/mainVideo/play.svg"}
                width="80"
                height="80"
                layout="responsive"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
