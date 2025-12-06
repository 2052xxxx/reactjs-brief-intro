import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const url = 'http://localhost:8000/blogs/';
    const { data: blog, isPending, error } = useFetch(url + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(url + blog.id, {
            method: 'DELETE',
        })
        .then(() => {
            navigate("/");
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error ? <div>{error}</div> :
                (blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p className='sub'>Written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleClick}>delete</button>
                    </article>
                ))
            }
        </div>
    );
}

export default BlogDetails;