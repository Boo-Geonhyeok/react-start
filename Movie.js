import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function Movie({medium_cover_image, id, title, genres, summary}) {
    return (
        <div key={id}>
        <img src={medium_cover_image} />
        <h2><Link to={`movie/${id}`}>{title}</Link></h2>
        <div>{genres.map(gerne => <span key={gerne}>{gerne} </span>)}</div>
        <p>{summary}</p>
      </div>
    )
}

Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie
