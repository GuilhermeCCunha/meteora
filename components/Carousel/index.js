// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import 'swiper/css';
import { StyledImage, StyledDiv, StyledDiv2, Container } from './styles';
import { SwiperNavButtons } from './SwiperNavButtons';

export default () => {
  return (
    <Container>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        rewind={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperNavButtons />
        <SwiperSlide><StyledImage> <img src='./images/Desktop/Banner carousel 1 _ 1440 (1).png' className='img1' /> <img src='./images/Tablet/Banner carousel 1 _ 768.png' className='img2' /> <img src='./images/Mobile/Banner carousel 1 _ 375.png' className='img3' /> </StyledImage ></SwiperSlide>
        <SwiperSlide><StyledImage> <img src='./images/Desktop/Banner carousel 2 _ 1440 (1).png' className='img1' /> <img src='./images/Tablet/Banner carousel 2 _ 768.png' className='img2' /> <img src='./images/Mobile/Banner carousel 2 _ 375.png' className='img3' />  </StyledImage ><StyledDiv2><h1>COLEÇÃO ATEMPORAL</h1>Estilo e qualidade para durar.</StyledDiv2></SwiperSlide>
        <SwiperSlide><StyledImage> <img src='./images/Desktop/Banner carousel 3 _ 1440 (1).png' className='img1' /> <img src='./images/Tablet/Banner carousel 3 _ 768.png' className='img2' /> <img src='./images/Mobile/Banner carousel 3 _ 375.png' className='img3' />  </StyledImage ><StyledDiv><h1>COLEÇÃO ATEMPORAL</h1>Alto impacto visual, baixo impacto ambiental!</StyledDiv></SwiperSlide>
      </Swiper>
    </Container>
  );
};