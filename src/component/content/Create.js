import { CKEditor } from 'ckeditor4-react'
import React from 'react'
import './Create.css'
const Create = () => {

    return (
        <>
            <div className="form_container">
                <form action="">
                    <div className="container_content">
                        <div className="title_header">
                            <div className="form_title">
                                <input type="text" name="" id="" placeholder="title" />
                            </div>
                            <div className="form_header">
                                <input type="text" name="" id="" placeholder="header" />
                            </div>
                        </div>
                        <div className="upload_all">
                            <div className="img_upload">
                                <label htmlFor="imageFile" className="label_upload">Upload Image</label>
                                <br/>
                                <input type="file" id="imageFile" name="imageFile" placeholder="image upload" />
                            </div>
                            <div className="video_upload">
                                <label htmlFor="videoFile" className="label_upload">Upload File</label>
                                <br/>
                                <input type="file" id="videoFile" name="videoFile" placeholder="video uplad" />
                            </div>
                        </div>
                        <div className="ck_editor">
                            <CKEditor
                            initData={<p>Hello from TR</p>}
                            >
                        </CKEditor>
                        </div>
                        
                    </div>

                </form>
            </div>
        </>
    )
}

export default Create
