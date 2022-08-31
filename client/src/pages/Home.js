import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const [listOfPost, setListOfPost] = useState([]);
    let navigate = useNavigate();
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
                        <div key={key} className="post" onClick={() => {navigate(`/post/${item.id}`)}}>
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
