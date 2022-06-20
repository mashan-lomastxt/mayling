import React from 'react'
import axios from 'axios'

const App = () => {
    const [movies,setMovies] = React.useState([])
    const [page,setPage] = React.useState(1)

    const getMovies = async() => {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2588072e53fb37c608b4b2a6cc38fe9f", {
            params: {
                page
            }
        })

        const limit = response.data.results
        setMovies(limit.slice(0,5))
    }

    React.useEffect(() => {
        getMovies()
    }, [movies])

    const nextHandler = () => {
        setPage(page+1)
    }

    return(
        <div>
            <h1>List Movies</h1>
            <ul>
                {movies.map((movie,index) => (
                    <li key={ index }>
                        <span style={{ fontSize: '24px' }} >{movie.title}</span> - {movie.overview} <br/>
                        <img width={ 100 } src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }/>
                    </li>
                ))}
            </ul>
            <button onClick={ nextHandler }>
                Next
            </button>
        </div>
    )
}

export default App