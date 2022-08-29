import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
    const [listOfPost, setListOfPost] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/posts").then((res) => {
            setListOfPost(res.data);
        })
    }, [])
    return (
        <div>
            {
                listOfPost.map((item, key) => {
                    return (
                        <div key={key} className="post">
                            <div className="title">{item.title}</div>
                            <div className="body">{item.postText}</div>
                            <div className="footer">{item.username}</div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Home
