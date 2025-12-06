import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const message = "Je le sens c'est lui l'homme de ma vie";
    const url = "http://localhost:8000/blogs";

    const [name, setName] = useState('Will Graham');
    const [age, setAge] = useState(40);

    const handleClick = () => {
        setName((prev) => (prev === "Will Graham" ? "Hannibal Lecter" : "Will Graham"))
        setAge((prev) => (prev === 40 ? 50 : 40))
    }

    const { data, isPending, error} = useFetch(url);

    return (
        <div className="home">
            <h2>{message}</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me!</button>
            <br />
            { error && <div> {error} </div>}
            { isPending ? <div>Loading...</div> : (data && <BlogList blogs={data} title = "All Blogs"/>)}
            {/* {blogs && <BlogList blogs={blogs} />} */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs"/> */}
        </div>
    );
}

export default Home;