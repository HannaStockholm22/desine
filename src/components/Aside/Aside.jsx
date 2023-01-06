import React from 'react';
import Published from '../Published/Published';
import ls from './Aside.module.css';
import { Link, NavLink } from 'react-router-dom';
import Social from '../Social/Social';


const Aside = (props) => {
    const lastPostsData = props.data.blogPage.postsData.slice(-3);
    const lastPostEl = lastPostsData.reverse().map(el => {
        return (
            <div>
                <Link to='/blog' className={ls.itemTitle}> {el.title} </Link>  
                <div className={ls.forpublished}>
                    <Published info={el} />
                </div>
            </div>
        )
    });

    let tagElements = props.data.tagsData.map(el => {
        return (   
                < NavLink className={ls.tagLink} to='/blog' name={el.name} >
                    {el.name}
                </NavLink>        
        )
    });

    let socialElements =
        props.data.footerPart.socialData.map(el => <Social id={el.id} path={el.path} name={el.name} right={'5px'}/>);


    return (

        <div className={ls.inner}>
            <form className={ls.form}>
                <input className={ls.search} type="text" placeholder='Search' />
                <button className={ls.btnTop} type="submit">
                    <img src="images/search.svg" alt="search-icon" />
                </button>
            </form>

            <div className={ls.category}>
                <h4 className={ls.title}>Categories</h4>
                {props.data.categorysData.map(el => <NavLink className={ls.link} to='/blog'> {el.name} ({el.count}) </NavLink>)}
            </div>

            <div className={ls.lastPosts}>
                <h4 className={ls.title}>Recent Posts</h4>
                {lastPostEl}
            </div>

            <div className={ls.tags}>
                <h4 className={ls.title}>Tags</h4>
                <div className={ls.block} >
                    {tagElements}
                </div>
            </div>
            
            <div className={ls.line}>
                {socialElements}
            </div>



        </div>
    )
}
export default Aside;