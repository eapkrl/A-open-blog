import { Link } from "react-router-dom";

// const BlogList = ({ blogs, title, handleDelete}) => {
    const BlogList = ({ blogs, title}) => {
    

    //const blogs = props.blogs;
    //const title = props.title;

    //console.log(props,blogs);
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) =>(
               <div className="blog-preview" key={blog.id}>
                {/* <Link to="/blogs">Blogs</Link> */}
                <Link to={"/blogs/${blog.id}"}>
                       <h2>{blog.title}</h2>
                       <p>Written By {blog.author}</p>
                </Link>
               {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
           </div>

            ))}
        </div>
    );
}
 
export default BlogList; 
























/*12---Reasuing components-----------------------------------------------------
const BlogList = ({ blogs, title}) => {

    //const blogs = props.blogs;
    //const title = props.title;

    //console.log(props,blogs);
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) =>(
               <div className="blog-preview" key={blog.id}>
               <h2>{blog.title}</h2>
               <p>Written By {blog.author}</p>
           </div>

            ))}
        </div>
    );
}
 
export default BlogList; 


*/