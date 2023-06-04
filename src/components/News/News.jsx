import 'react';
import './News.css'
import authorr from '../../../image/wepik-export-20230603191023rzHB.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const News = (props) => {
    const { author, title, banner, relese, picture } = props.post;
    return (
        <div className='news'>
            <img src={banner} alt="" />
            <div className='author-container'>
                <div className='author'>
                    <div>
                        <img src={authorr} alt="" />
                    </div>
                    <div>
                        <h2>{author}</h2>
                        <p>{relese}</p>
                    </div>
                </div>
                <div>
                    <p>16 min read  <FontAwesomeIcon icon={faBookmark} /></p>
                </div>
            </div>
            <h1>{title}</h1>
            <p>#beginners #proggraming</p>
            <a href="/mark">Mark as read</a>
        </div>
    );
};

export default News;