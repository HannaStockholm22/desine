import React from 'react';
import Published from '../../Published/Published';
import ls from './PostsCard.module.css';

const PostsCard = ({data}) => {
    const pathpub = `images/posts/${data.photo}`;
    return (
        <div className={ls.inner} >
            <img className={ls.img} src={pathpub} alt="image" />
            <div className={ls.video}></div>
            <div className={ls.forpublished}>
                <Published info={data} show={true} />
            </div>
            <h2 className={ls.title}>{data.title}</h2>
            <p className={ls.text}>{data.text}</p>
        </div>
    )
}
export default PostsCard;