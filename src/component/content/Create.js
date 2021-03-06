import { CKEditor } from 'ckeditor4-react'
import React, { useRef, useState } from 'react';
import './Create.css';
import Axio from 'axios'
import { ENV } from '../environment/ENV'
import axios from 'axios';

const Create = () => {
    const [content, setContent] = useState({
        title: '',
        header: '',
        imageFile: '',
        videoFile: '',
        contents: ''
    })
    const imageRef = useRef(null);

    const handleInput = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value})
    }

    const submitContent = (e) => {
        console.log(e.target.imageFile.files[0]);
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', content.title);
        formData.append('header', content.header);
        formData.append('video', e.target.videoFile.files[0]);
        formData.append('image', e.target.imageFile.files[0]);

        axios({
            url: ENV.URL + 'content/upload',
            method: 'POST',
            data: formData,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    return (
        <>
            <div className="form_container">

                <form action="" onSubmit={submitContent}>
                    <div className="container_content">
                        <div className="title_header">
                            <div className="form_title">
                                <input type="text" name="title" id="title" placeholder="title.." onChange={handleInput} value={content.title} required/>
                            </div>
                            <div className="form_header">
                                <input type="text" name="header" id="header" placeholder="header.." onChange={handleInput} value={content.header} required/>
                            </div>
                        </div>
                        <div className="upload_all">
                            <div className="img_upload">
                                <label htmlFor="imageFile" className="label_upload">Upload Image</label>
                                <br />
                                <input type="file" id="imageFile" accept="image/*" name="imageFile" placeholder="image upload"
                                    onChange={handleInput} value={content.imageFile} className="imageFile" required/>
                            </div>
                            <div className="video_upload">
                                <label htmlFor="videoFile" className="label_upload">Upload File</label>
                                <br />
                                <input type="file" id="videoFile" className="videoFile" name="videoFile" placeholder="video uplad" 
                                onChange={handleInput} 
                                value={content.videoFile} required/>
                            </div>
                        </div>
                        <div className="ck_editor">
                            <CKEditor
                                initData={<p>Hello from TR</p>}>
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                            </CKEditor>
                        </div>
                        <input type="submit" value="submit" className="submitContents" />
                    </div>

                </form>

            </div>
        </>
    )
}

export default Create
