import React from 'react'
import axios from 'axios'

const App = () => {
    const [movies,setMovies] = React.useState([])

    const getMovies = async() => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=2588072e53fb37c608b4b2a6cc38fe9f", {
            params: {
                page: 1
            }
        })
        setMovies(response.data.results)
    }

    React.useEffect(() => {
        getMovies()
    }, [])

    console.log(movies)

    return(
        <div>
            <h2>Hello Worlds!</h2>
        </div>
    )
}

export default App