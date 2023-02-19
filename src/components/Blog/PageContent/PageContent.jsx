import React from 'react';
import PostsCard from '../PostsCard/PostsCard';
import ls from './PageContent.module.css';


const PageContent = ({data}) => {
    /* DON'T USE IT NOW */
    const pageID = data.blogPage.activePage;
    const onPage = data.blogPage.onPage;
    const length = data.blogPage.postsData.length;

    const start = pageID * onPage;
    let end = start + onPage;
    if (end > length) end = data.blogPage.postsData.length;
    const postsEl = data.blogPage.postsData.slice(start, end).map(el => <PostsCard data={el} />);

    return (
        <div>
            {postsEl}   
        </div>
    )
}
export default PageContent;
