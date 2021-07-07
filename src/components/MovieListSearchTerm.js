import React from 'react';

const MovieListSearchTerm = (props) => {
    return (
        <div className='col'>
            <h1 className='text-5xl font-black leading-loose tracking-widest text-center'>{props.headline}</h1>
        </div>
    );
};

export default MovieListSearchTerm;