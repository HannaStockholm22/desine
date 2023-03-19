import React, { useRef, useState } from 'react';
import Aside from '../Aside/Aside';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ls from './Blog.module.css';
import OnePageNumber from './OnePageNumber/OnePageNumber';
import PostsCard from './PostsCard/PostsCard';
//import { updatePageNumberActionCreator } from './../../store/state';


const Blog = ({data,dispatch}) => {

    const [pageNumber, setPageNumber] = useState(0);
  
    const onPage = data.blogPage.onPage;
    const length = data.blogPage.postsData.length;

    const changePageContent=(newNumber)=>{
        setPageNumber(newNumber); 
       // dispatch(updatePageNumberActionCreator(newNumber));
    }

    const start = pageNumber * onPage;
    let end = start + onPage;
    if (end > length) end = length;

    const postsEl = data.blogPage.postsData.slice(start, end).map(
        el =><PostsCard data={el} activePage={pageNumber} />
    );
    
    let pageCount = Math.ceil(length / onPage);
    let pageData = [];
    for (let index = 0; index < pageCount; index++) {
        pageData[index] = index;
    }
 
    const pageChose = pageData.map(el => <OnePageNumber id={el} activePage={pageNumber} changePageContent={changePageContent} />);

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
                    <Aside data={data} />
                </aside>
            </div>
        </div>
    </div>
)
}
export default Blog;