import'react';
import './Status.css'
import { useEffect, useState } from 'react';
import News from '../News/News';
const Status = () => {
    const [posts, setPosts] = useState([]);
     
    useEffect(()=>{
        fetch('pakage.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <div>
            <div className="status-container">
                <div className="status-field">
                    {
                        posts.map(post => <News 
                            key={post.id}
                            post = {post}
                            ></News>)
                    }
                </div>
                <div className="bookmark-field">
                    <h2>Bookmark</h2>
                </div>
            </div>
        </div>
    );
};

export default Status;