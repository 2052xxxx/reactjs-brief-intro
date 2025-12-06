import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Will Graham");
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        // setTimeout(() => {
        // }, 1000)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('form submitted!', blog)
            setIsPending(false);
            // navigate(-1);
            navigate("/");
        })

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Will Graham">Will Graham</option>
                    <option value="Hannibal Lecter">Hannibal Lecter</option>
                    <option value="fathers' daughter">fathers' daughter</option>
                </select>
                { isPending ? <button disabled >Uploading...</button>: <button>Add Blog</button>}

                {/* <p>{author}</p> */}

            </form>
        </div>
    );
}

export default Create;