import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  modules: [Autoplay],
  loop: true,
  speed: 1000,
  slidesPerView: 1.5,
  spaceBetween: 32,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
  },
});
