import React from 'react';
import Aside from '../Aside/Aside';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import PostsCard from '../PostsCard/PostsCard';
import ls from './Blog.module.css';
import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';


const Blog = (props) => {
    const onPage = 3;
    const postsEl = props.data.blogPage.postsData.slice(0, onPage).map(el => <PostsCard data={el} />);
    let pageCount = Math.ceil(props.data.blogPage.postsData.length / onPage);
    
    return (
        <>
            <BreadCrumbs name={'Blog'} path={'/blog'} />
            <div className="container">
                <div className={ls.inner}>
                    <div className={ls.content}>
                        {postsEl}
                        <p className={ls.page}>{pageCount}</p>
                    </div>
                    <aside className={ls.aside}>
                        <Aside data={props.data} />
                    </aside>
                </div>

            </div>
        </>
    )
}
export default Blog;