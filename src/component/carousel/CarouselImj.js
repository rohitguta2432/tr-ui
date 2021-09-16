import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import './CauouselImj.css'

const CarouselImj = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} className="carousel_main">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={window.location.origin + '/images/eComme.jpg'}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={window.location.origin + '/images/images.jpeg'}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={window.location.origin + '/images/web_design.jpg'}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselImj
