import Card from "../common/Card";
import Carrossel from "../common/Carrossel";
import { SwiperSlide } from "swiper/react";
import "./promessas.scss";
import exibicao from "../../assets/promessas/exibicao.png";
import foguete from "../../assets/promessas/foguete.png";
import xadrez from "../../assets/promessas/xadrez.png";
import garantia from "../../assets/promessas/garantia.png";
import otimizacao from "../../assets/promessas/otimizacao.png";

function Promessas() {
  const settings = {
    slidesPerView: 1,
    width: 350,
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 1000 * 5,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  };

  return (
    <section className="promessas d-flex pad">
      <div className="container">
        <div className="content d-flex">
          <h2>
            Alguns dos processos que uso para aumentar a conversão das suas
            páginas:
          </h2>

          <div className="cards d-flex">
            <Carrossel settings={settings}>
              <SwiperSlide>
                <Card
                  icon={exibicao}
                  title="Responsividade"
                  promessa="Sua página será responsiva com os tipos de tela mais utilizados."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  icon={foguete}
                  title="Alta velocidade"
                  promessa="Seu projeto será desenvolvido com códigos, sem o uso de WordPress."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  icon={xadrez}
                  title="Estratégia"
                  promessa="Sua página será pensada exclusivamente no seu caso, sem utilização de templates prontos."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  icon={otimizacao}
                  title="Otimização"
                  promessa="Sua página seguirá as boas práticas de desenvolvimento, tornando-as leves."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  icon={garantia}
                  title="Desempenho"
                  promessa="Te garanto que a performance da sua página será acima de 90%. (de acordo com o GTmetrix)"
                />
              </SwiperSlide>
            </Carrossel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promessas;
