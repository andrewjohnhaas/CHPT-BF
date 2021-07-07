import React from 'react';

const MovieList = (props) => {
    if (props.movies.length !== 0) {
        return (
            <ul className="grid grid-cols-1 md:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8">
                    {props.movies.map((movie, index) => (
                        <li
                            key={index}
                            className='relative items-baseline mt-4 mb-6'>
                            <img
                                className='rounded-lg shadow-xl hover:shadow-2xl'
                                src={movie.Poster}
                                alt='Movie Poster of {movie.Title}'>
                            </img>
                            <figcaption className="absolute w-100 text-lg pt-2 pb-2 pl-5 pr-5 -mt-16 text-white px-4 leading-snug bg-gradient-to-l from-gray-800 via-gray-900 to-black">
                                <div className="text-gray-200">
                                    {movie.Title}
                                </div>
                                <div className="text-gray-300">
                                    {movie.Year}
                                </div>
                            </figcaption>
                        </li>
                    ))}
            </ul>
        );
    } else {
        return (
            <h2>Search Above to Find Movies</h2>
        );
    }
};

export default MovieList;