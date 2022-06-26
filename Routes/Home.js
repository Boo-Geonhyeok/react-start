import {useState, useEffect} from "react"
import Movie from "/Users/ghboo/Desktop/code/restart/src/Components/Movie"

function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([]) 
    const getMovies = async () => {
    const json = await(
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json()
    setMovies(json.data.movies)
    setLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <ul>
      {loading ? <h2>Loading...</h2> : movies.map(movie =>  
      <Movie medium_cover_image={movie.medium_cover_image} id={movie.id} title={movie.title} genres={movie.genres} summary={movie.summary}/>
      )
      }
      </ul>
    </div>
  );
}

export default Home