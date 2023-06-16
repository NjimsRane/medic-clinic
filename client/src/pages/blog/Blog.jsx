import { useEffect } from "react";

const Blog = () => {

    useEffect(() => {
        document.title = 'Blog - Medicare';
    }, []);

    return <div>Blog</div>;
};

export default Blog;
