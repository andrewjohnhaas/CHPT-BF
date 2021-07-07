import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../css/site.css';
import MovieList from '../components/MovieList';
import MovieListSearchTerm from '../components/MovieListSearchTerm';
import SearchForm from '../components/SearchForm';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=4b42584d`
    );

    if (response.data.Search) {
      setMovies(response.data.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className='text-gray-100 leading-loose bg-gray-900'>
      <div className='min-h-screen container mx-auto'>
        <MovieListSearchTerm headline='Movies' />
        <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />

        <div className='row'>
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default App;