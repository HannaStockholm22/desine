import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideElement from './SlideElement/SlideElement';
import ls from './OneSlider.module.css';

const OneSlider = (props) => {
    const settings = {
        dots: true,
        //fade: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000
    }

    let slideElements =
        props.data.slideData.map(el => {
            return (
                <div>
                    <SlideElement name={el.name} title={el.title} />
                </div>
            )
        });

    return (
        <div>
            <Slider {...settings}>
                {slideElements}
            </Slider>
        </div>
    )
}
export default OneSlider;