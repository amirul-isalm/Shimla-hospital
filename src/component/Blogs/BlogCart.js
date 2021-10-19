import React from 'react'
import { useHistory } from 'react-router';
import "./Blog.css"

const BlogCart = ({ blog }) => {
    const { title, id, details, img } = blog;
    const history=useHistory()
    const readmore = () => {
        history.push(`/blogs/${id}`);
    }
    return (
        <div className="col-12 col-md-6 col-lg-4 my-3 ">
            <div className="blogCart mx-3 my-3 h-100 p-3">
                <img src={img} className="img-fluid rounded-3 mb-2" alt="" />
                <h4>{title}</h4>
                <p>{details.slice(0, 200)}</p>
                <button onClick={readmore}>Read more</button>
            </div>
        </div>
    );
};

export default BlogCart;