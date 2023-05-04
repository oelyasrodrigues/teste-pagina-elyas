import { Swiper } from "swiper/react";
import { Autoplay, EffectFlip } from "swiper";
import 'swiper/css';

function Carrossel({settings, children}) {
  return (
    <Swiper modules={[Autoplay, EffectFlip]} {...settings}>{children}</Swiper>
  )
}

export default Carrossel