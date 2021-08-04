import Movie from './components/Movie';
import { useEffect, useState } from 'react';

const APIURL =
  `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.APIURL}&page=1`;
function App() {
  const [movies, setMovies] = useState([])

  useEffect(async () => {
    fetch(APIURL).then(res => res.json())
      .then(data => {

        setMovies(data.results)

      })}, [])

return (
    <div className="movie-container">

      {movies.map((movie) => <Movie key={movie.id} {...movie}
      />


      )}

    </div>
  );
}

export default App;
