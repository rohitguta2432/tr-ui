import Modal from 'react-modal';
import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, SetIsOpen] = useState(false);
    const [formObject, setFormObject] = useState({
        name: "",
        email: "",
        phone: "",
        detail: ""
    });

    const openEnquiry = () => {
        console.log('click');
        SetIsOpen(true);
    }
    const closeModal = () => {
        SetIsOpen(false);
    }

    const handlerequest = (e) => {
        setFormObject({ ...formObject, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formObject);
    }
    return (
        <>
            <nav className="navbar">
                <label className="logo">
                    TR
                </label>
                {/* <button className="mobile-menu-icon">
                    {isMobile ? <i className="fas fa-times" /> : <i className="fas fa-bars"/>}
                </button> */}
                <ul className={isMobile ? 'mobile-links' : 'list'}>
                    <li className="item4" onClick={openEnquiry}>Enquiry Now</li>
                    {/* <li className="item1">About Us</li>
                    <li className="item2">Contact Us</li>
                    <li className="item3">Services</li> */}
                </ul>

            </nav>
            <Modal isOpen={isOpen}
                className="modal_content">
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="textname" className="textname">Free consultation</label>
                    <div className="details_main_container">
                        <div className="box">
                            <input type="text" id="name" name="name" value={formObject.name} placeholder="your name" autoComplete="off" onChange={handlerequest} />
                        </div>

                        <div className="box">
                            <input type="text" id="email" name="email" value={formObject.email} placeholder="email address" autoComplete="off" onChange={handlerequest} />
                        </div>
                        <div className="box">
                            <input type="text" id="phone" name="phone" value={formObject.phone} placeholder="phone" autoComplete="off" onChange={handlerequest} />
                        </div>
                        <div className="box">
                            <textarea className="details" id="detail" name="detail" cols="30" rows="5" value={formObject.detail} placeholder="description" onChange={handlerequest} autoComplete="off" />
                        </div>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </Modal>
        </>
    )
}

export default Navbar
