import React from 'react';
import PostsCard from '../PostsCard/PostsCard';
import ls from './PageContent.module.css';


const PageContent = (props) => {
    /* DON'T USE IT NOW */
    const pageID = props.data.blogPage.activePage;
    const onPage = props.data.blogPage.onPage;
    const length = props.data.blogPage.postsData.length;

    const start = pageID * onPage;
    let end = start + onPage;
    if (end > length) end = props.data.blogPage.postsData.length;
    const postsEl = props.data.blogPage.postsData.slice(start, end).map(el => <PostsCard data={el} />);

    return (
        <div>
            {postsEl}   
        </div>
    )
}
export default PageContent;
