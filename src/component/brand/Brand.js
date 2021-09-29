import React, { useState } from 'react'
import './Brand.css'
import Circle from 'react-circle'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const Brand = () => {
    const textT = `Tailor Made Websites`;
    const design = `Websites Designing`;
    const [width, setWidth] = useState(window.innerWidth);
        
    return (
        <>
            <div className="brand_main">
                <h1> we build, revive
                and grow brand websites
            </h1>
                <hr />
                <h3>Our Solution to business Include :</h3>
                <div className="parent_brand">
                <div className="card_mag">
                    <div className="img_box">
                        <img src={window.location.origin + '/images/custome_soft.png'} alt="" className="website_img"/>
                    </div>
                    <div className="content">
                        <span>We rely on our industry-specific technology experience to deliver highly scalable,flexible and interoperable.</span>
                    </div>
                </div>
                <div className="card_content_dev">
                    <div className="img_content">
                        <img src={window.location.origin + '/images/custom_soft.jpg'} alt="" className="cont_img"/>
                    </div>
                    <div className="content_dev">
                        <span>we Discover , We Design We Execute</span>
                    </div>
                </div>

                <div className="card_content_dev3">
                    <div className="img_content3">
                        <img src={window.location.origin + '/images/web_de.jpg'} alt="" className="cont_img3"/>
                    </div>
                    <div className="content_dev3">
                        <h4>Responsive . Fast Loading . Browser Compatible</h4>
                        <p>We optimize the websites which are responsive to all devices.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Brand
