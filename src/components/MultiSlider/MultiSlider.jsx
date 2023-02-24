import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './../slick-theme.css';
import SliderEl from './SliderEl/SliderEl';
import ls from './MultiSlider.module.css';

const MultiSlider = ({play,data}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 6,
        autoplay: play,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1324,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 5,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 1060,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            }
          },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 730,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 2
              }
            },
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 378,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              }
            }
          ]
    }

    return (
            <Slider {...settings}>    
             { data.slideData.map(el => <SliderEl name={el.name} title={el.title}  />)}  
            </Slider>
       
    )
}
export default MultiSlider;