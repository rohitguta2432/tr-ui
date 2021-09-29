import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { SiWhatsapp } from 'react-icons/si'

const Contact = () => {
    const [formObject, setFormObject] = useState({
        name: "",
        email: "",
        phone: "",
        detail: ""
    });

    const handlerequest = (e) => {
        setFormObject({ ...formObject, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formObject);
    }

    return (
        <>
            {/* <div className="close_modals">
                <ImCross className="closeModel" onClick={closeModal} />
            </div> */}
            
            <form action="" onSubmit={handleSubmit}>

                <a href="https://web.whatsapp.com/send?phone=+918130313297" target="_blank">
                    <SiWhatsapp className="icon_message"></SiWhatsapp>
                </a>
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
        </>
    )
}

export default Contact
