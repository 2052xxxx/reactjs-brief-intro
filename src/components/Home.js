import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const message = "Je le sens c'est lui l'homme de ma vie";

    const [name, setName] = useState('Will Graham');
    const [age, setAge] = useState(40);

    const [blogs, setBlogs] = useState([]);

    const handleClick = () => {
        setName((prev) => (prev === "Will Graham" ? "Hannibal Lecter" : "Will Graham"))
        setAge((prev) => (prev === 40 ? 50 : 40))
    }

    // useEffect(() => {
    //     async function fetchBlogs() {
    //         let response = await fetch("http://localhost:8000/blogs");
    //         response = await response.json();
    //         setBlogs(response);
    //     }

    //     fetchBlogs();
    // }, [])

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    }, [])

    return (
        <div className="home">
            <h2>{message}</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me!</button>
            <br />

            {blogs && <BlogList blogs={blogs} />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs"/> */}
        </div>
    );
}

export default Home;