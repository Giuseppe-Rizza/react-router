import { useState, useEffect } from 'react'
import axios from "axios";

import { Link } from "react-router-dom";

export default function List() {

    const [list, setList] = useState([]);

    function fetchTodos() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => setList(res.data))
    }

    useEffect(fetchTodos, []);

    const posts = list.length;

    const removePost = (id) => {
        const updatedList = list.filter((post) => {
            return post.id !== id

        });
        setList(updatedList);

        if (updatedList.length === 0) {
            return <h1>No one post</h1>
        }

    }

    return (

        <>

            {list.length === 0 ? (

                <h1>No one post</h1>
            ) : (

                list.map((post) => (
                    <div className='postItem' key={post.id}>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.tags.join(", ")}</p>
                        <Link to={`/list/${post.id}`} state={{ totalPosts }}>Detail</Link>
                        <button onClick={() => removePost(post.id)}>Remove Post</button>
                    </div >

                ))
            )}


        </>

    )

}