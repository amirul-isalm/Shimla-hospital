import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BlogsDetails = () => {
    const [matchBlog, setMatchBlog] = useState({});
    const { id } = useParams();
const { title,  details, img } = matchBlog;
    useEffect(() => {
      fetch("/blogs.json")
        .then((res) => res.json())
        .then((data) => {
          const target = data.find((Blog) => Blog.id === parseInt(id));
          setMatchBlog(target);
        });
    }, [id]);
    
    
    return (
        <div className="w-75 mx-auto text-start py-4">
            <img style={{width:"400px"}}   src={img} alt="" />
            <h1 className="my-3">{title}</h1>
            <p>{ details}</p>
        </div>
    );
};

export default BlogsDetails;