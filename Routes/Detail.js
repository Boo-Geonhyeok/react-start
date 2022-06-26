import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

function Detail() {
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [movieDetail, setMovieDetail] = useState([])
    const getMovieDetail = async () => {
        const json = await(
          await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
          )
        ).json()
        setMovieDetail(json.data.movie)
        setLoading(false)
      }
    useEffect(() => {
        getMovieDetail()
    }, [])

    console.log(movieDetail);

    return (
        <div>
        {loading ? <h1>Loading...</h1> : <h2>{movieDetail.title}</h2>}
        </div>
    )
}

export default Detail