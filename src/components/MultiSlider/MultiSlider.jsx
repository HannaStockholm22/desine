import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './../slick-theme.css';
import SliderEl from './SliderEl/SliderEl';
import ls from './MultiSlider.module.css';

const MultiSlider = (props) => {
    const settings = {
        dots: true,
       // fade: props.fade,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 6,
        autoplay: props.play,
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
            }
          ]
    }

    return (
            <Slider {...settings}>    
             { props.data.slideData.map(el => <SliderEl name={el.name} title={el.title}  />)}  
            </Slider>
       
    )
}
export default MultiSlider;