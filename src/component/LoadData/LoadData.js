import { useEffect, useState } from 'react';

const LoadData = () => {
    const [services, setServices] = useState([])
    const [blogs, setBlogs] = useState([])
    const [exparts, setExparts] = useState([])

    useEffect(() => {
        fetch("/Data.json")
            .then(res => res.json())
        .then(data=>setServices(data))
    },[])
    useEffect(() => {
        fetch("/blogs.json")
            .then(res => res.json())
        .then(data=>setBlogs(data))
    },[])
    useEffect(() => {
        fetch("/expart.json")
            .then(res => res.json())
        .then(data=>setExparts(data))
    },[])


    return {services,blogs,exparts}
};

export default LoadData;