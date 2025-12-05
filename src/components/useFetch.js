import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState([]);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data");
                }
                setIsPending(true);
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
            })
            .catch((e) => {
                console.log(e.message);
                setIsPending(false);
                setError(e.message)
            })
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;

// useEffect(() => {
//     async function fetchBlogs() {
//         let response = await fetch("http://localhost:8000/blogs");
//         response = await response.json();
//         setBlogs(response);
//     }

//     fetchBlogs();
// }, [])