import styled,{ keyframes  } from 'styled-components';
import { Swiper,SwiperSlide } from 'swiper/react';
const Animation =keyframes`
  0%{
    transform: translateX(0px);
  }50%{
    transform: translateX(10px);
  }100%{
    transform: translateX(0px);
  }
`;
export const SwiperContainer=styled(Swiper)`
  width: 100vw;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 50px;
`;
export const SwiperCard=styled(SwiperSlide)`
 background-position: center;
  background-size: cover;
  width: 40%;
  height: auto;
  display: inline-block;
  img{
    display: block;
    width: 100%;
    filter: brightness(100%);
    transition: 0.2s ease-in-out;
  }
  p{
    position: absolute;
    top: 30px;
    left: 30px;
    width: 80%;
    color: transparent;
    transition: 0.4s ease-in-out;
  }
  a{
    position: absolute;
    bottom: 30px;
    left: 30px;
    width: 80%;
    color: transparent;
    svg{
        animation:  ${Animation} 1s linear infinite;
      }
  }
  &:hover{
    img{
      filter: brightness(50%);
    }
    p,a{
      color: white;
    }
  }
  @media screen and (max-width: 767px) {
    height: 40%;
    width: 50%;
    p{
      color: white;
      font-size:70%;
      overflow-y: auto;
    }
  }
  
`