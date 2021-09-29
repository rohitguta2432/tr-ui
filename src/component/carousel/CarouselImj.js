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
        <div className="coursel_">
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
                        src={window.location.origin + '/images/web-1668927_1920.jpg'}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={window.location.origin + '/images/work-731198_1920.jpg'}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}

export default CarouselImj
