import React from 'react';
import { useSwiper } from 'swiper/react';
import { StyledPrev, StyledNext } from './styles';

export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <>
            <StyledPrev>
                <button onClick={() => swiper.slidePrev()}><img src='./images/prev.svg' /></button>
            </StyledPrev>
            <StyledNext>
                <button onClick={() => swiper.slideNext()}><img src='./images/next.svg' /></button>
            </StyledNext>
        </>
    );
};