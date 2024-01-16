import React from "react";

const page = async () => {
    const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=45388f10')
    const movies = await res.json()
    if (!movies){
        return null
    }
    debugger
    console.log('!!!!')
    console.log(res.json())
    return (
        <>
             <h1>Movies</h1>
             <ul>
                {movies.Title}
             </ul>

        </>
    )
}

export default page