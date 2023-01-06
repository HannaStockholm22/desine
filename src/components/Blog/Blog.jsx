import React from 'react';
import Aside from '../Aside/Aside';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ls from './Blog.module.css';

const Blog = (props) => {
    return (
        <>
            <BreadCrumbs name={'Blog'} path={'/blog'} />
            <div className="container">
                <div className={ls.inner}>

                    <div className={ls.content}>
                        Content
                    </div>


                    <aside className={ls.aside}>
                        <Aside  data={props.data}/>
                    </aside>

                </div>
            </div>
        </>
    )
}
export default Blog;