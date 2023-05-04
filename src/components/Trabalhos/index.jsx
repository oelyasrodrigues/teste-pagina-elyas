import CardScroll from "../common/CardScroll";
import Carrossel from "../common/Carrossel";
import { SwiperSlide } from "swiper/react";
import {
  instagram,
  behence,
  gas1,
  gas2,
  gas3,
  gas4,
  est1,
  est2,
  est3,
  est4,
  gym1,
  gym2,
  gym3,
  gym4,
  gym5,
  gym6,
  gym7,
  gym8,
  gym9,
  mainstreet,
  projetoDom,
  comunidadeCafa,
} from "./imgs";

import "./trabalho.scss";
import CreativeCard from "../common/CreativeCard";

function Trabalhos() {
  const settings = {
    loop: true,
    autoplay: {
      delay: 1000 * 3,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      540: {
        slidesPerView: 2,
      },
      840: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };
  const date = new Date();

  let hora;

  if (date.getHours() <= 12 && date.getHours() >= 0) {
    hora = "Bom dia";
  } else if (date.getHours() >= 13 && date.getHours() <= 18) {
    hora = "Boa tarde";
  } else {
    hora = "Boa noite";
  }

  return (
    <section className="trabalhos d-flex">
      <div className="container">
        <div className="content pad">
          <h2>Conheça meu trabalho</h2>

          <div className="social-media d-flex">
            <a href="https://www.instagram.com/dsgn.elyas/" target={"_blank"}>
              <img src={instagram} alt="logo-instagram" />
            </a>
            <a href="https://behance.net/elyasdsgn" target={"_blank"}>
              <img src={behence} alt="logo-behence" />
            </a>
          </div>

          <div className="pages">
            <p>Páginas</p>

            <div className="cards d-flex">
              <CardScroll img={mainstreet} />
              <CardScroll img={projetoDom} />
              <CardScroll img={comunidadeCafa} />
            </div>
          </div>

          <div className="creatives">
            <p>Criativos</p>

            <div className="creatives-cards">
              <Carrossel settings={settings}>
                <SwiperSlide>
                  <CreativeCard creativeImg={gas1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gas2} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gas3} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gas4} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={est1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={est2} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={est3} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={est4} />
                </SwiperSlide>
              </Carrossel>
            </div>
            <div className="creatives-cards">
              <Carrossel settings={settings}>
                <SwiperSlide>
                  <CreativeCard creativeImg={gym1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gym2} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gym3} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gym4} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gym5} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gym6} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gym7} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gym8} />
                </SwiperSlide>
                <SwiperSlide>
                  <CreativeCard creativeImg={gym9} />
                </SwiperSlide>
              </Carrossel>
            </div>
          </div>

          <a
            href={`https://wa.me/98988149744?text=Oi, ${hora}! Vim pelo seu site e quero fazer um orçamento.`}
            className="button"
          >
            QUERO UM ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
}

export default Trabalhos;
