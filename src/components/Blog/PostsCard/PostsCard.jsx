import React from 'react';
import Published from '../../Published/Published';
import ls from './PostsCard.module.css';

const PostsCard = (props) => {
    const pathpub = `images/posts/${props.data.photo}`;
    return (
        <div className={ls.inner} >
           
            <img className={ls.img} src={pathpub} alt="image" />
            <div className={ls.video}></div>
            <div className={ls.forpublished}>
                <Published info={props.data} show={true} />
            </div>
            <h2 className={ls.title}>{props.data.title}</h2>
            <p className={ls.text}>{props.data.text}</p>
        </div>
    )
}
export default PostsCard;