import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";


export default function PostDetailPage() {

    const { id } = useParams();

    const [list, setList] = useState({});

    const location = useLocation();
    const posts = location.state?.posts || 1;

    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setList(res.data))

            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPost(),
        [id])

    const getPrevPostId = () => (parseInt(id) === 1 ? posts : parseInt(id) - 1);
    const getNextPostId = () => (parseInt(id) === posts ? 1 : parseInt(id) + 1);


    return (
        <>
            <div className="postdetail">
                <nav className="navdetail">
                    <Link to={`/list/${getPrevPostId()}`} state={{ posts }}>Prev</Link>
                    <Link to={`/list/${getNextPostId()}`} state={{ posts }}>Next</Link>
                </nav>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.content}</p>
            </div>
        </>
    );
}