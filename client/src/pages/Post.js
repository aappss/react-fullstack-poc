import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/posts/byId/${id}`).then((res) => {
            setPostObject(res.data);
        })
    }, []);
    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="title"> {postObject.title}</div>
                <div className="postText"> {postObject.postText}</div>
                <div className="footer"> {postObject.username}</div>
            </div>
            <div className="rightSide"></div>
        </div>
    )
}

export default Post
