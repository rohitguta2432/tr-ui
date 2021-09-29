import Modal from 'react-modal';
import React, { useState } from 'react'
import './Navbar.css'
import {SiWhatsapp} from 'react-icons/si'
import { Link, useHistory } from 'react-router-dom';
import {ImCross} from 'react-icons/im'


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, SetIsOpen] = useState(false);
    const [formObject, setFormObject] = useState({
        name: "",
        email: "",
        phone: "",
        detail: ""
    });
    const history = useHistory();

    const openEnquiry = () => {
        history.push('/contact');
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
    const openLeaning = () =>{
        history.push("/learning");
    }

    const goHome = () =>{
        history.push('/');
    }

    return (
        <>
            <nav className="navbar">
                <label className="logo" onClick={goHome}>
                    TR
                </label>
               
                <ul className={isMobile ? 'mobile-links' : 'list'}>
                    <li className="learning" onClick={openLeaning}>Learning</li>
                    <li className="item4" onClick={openEnquiry}>Enquiry Now</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
