import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
// Import Swiper React components
import { SwiperContainer, SwiperCard } from "./CarrousselStyle";
// Import Swiper styles
import "swiper/css";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
export const Carroussel = () => {
  const props = [
    {
      img: "https://media.contentapi.ea.com/content/dam/eacom/lost-in-random/images/2021/08/lir-usp-in-engine-screen-twotown-royam-no-logo.jpg.adapt.crop16x9.575p.jpg",
    },
    {
      img: "https://sm.ign.com/ign_br/review/l/lost-in-ra/lost-in-random-review_hga6.jpg",
    },
    {
      img: "data:image/png;base64,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",
    },
  ];
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <SwiperContainer
        theme={theme}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {props.map((item, index) => {
          return (
            <>
              <SwiperCard key={index}>
                <img src={item.img} alt="Imagem do Projeto" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  recusandae quo unde neque rem rerum maiores, eligendi libero
                  beatae consequatur delectus quos distinctio perferendis,
                  suscipit officiis itaque iure optio. Tenetur.
                </p>
                <a href="/">
                  Ver Projeto <AiOutlineArrowRight />
                </a>
              </SwiperCard>
            </>
          );
        })}
      </SwiperContainer>
    </>
  );
};
