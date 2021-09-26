import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import './Learning.css';
import Axios from 'axios'
import { ENV } from '../environment/ENV'

const Learning = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        Axios.get(ENV.URL + 'content')
            .then((response) => {
                setContent(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }, []);
    console.log(content);

    return (
        <>
            <div className="container">
                {
                    content.map((value) => {
                        return (<>
                            <div className="card-content" key={value.contentId}>
                                <div className="players" >
                                    <ReactPlayer url={value.videoUrl}
                                        playing={true}
                                        controls={true}
                                        light={value.imgUrl}
                                        volume={1} />
                                </div>
                                <p>
                                    {value.content}
                                </p>
                            </div>
                        </>);
                    })
                }

            </div>
        </>
    )
}

export default Learning
