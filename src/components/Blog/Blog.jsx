import React, { useRef, useState } from 'react';
import Aside from '../Aside/Aside';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ls from './Blog.module.css';
import OnePageNumber from './OnePageNumber/OnePageNumber';
import PostsCard from './PostsCard/PostsCard';

const Blog = (props) => {

    //const [number, setNumber] = useState(pageNumber);
    //inputEl = useRef();

    const point = props.data.blogPage;
    const pageNumber = point.activePage;
    const onPage = point.onPage;
    const length = point.postsData.length;

  
    const start = pageNumber * onPage;
    let end = start + onPage;
    if (end > length) end = length;
    const postsEl = point.postsData.slice(start, end).map(el =><PostsCard data={el} activePage={pageNumber} />);
    
    let pageCount = Math.ceil(length / onPage);
    let pageData = [];
    for (let index = 0; index < pageCount; index++) {
        pageData[index] = index;
    }
    const pageChose = pageData.map(el => <OnePageNumber id={el} activePage={pageNumber} />);

return (
    <div>
        <BreadCrumbs name={'Blog'} path={'/blog'} />
        <div className="container">
            <div className={ls.inner}>
                <div className={ls.content}>
                    {postsEl}
                    <div className={ls.page}>
                        {pageChose}
                    </div>
                </div>
                <aside className={ls.aside}>
                    <Aside data={props.data} />
                </aside>
            </div>
        </div>
    </div>
)
}
export default Blog;