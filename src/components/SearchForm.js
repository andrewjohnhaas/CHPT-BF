import React from 'react';

const SearchForm = (props) => {
    return (
        <div className='w-full md:w-6/12 text-center mx-auto mb-10'>
            <label htmlFor="SearchMovie" className="block text-sm font-medium text-gray-100">Type to search</label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md text-gray-700'
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    placeholder=''
                    name="SearchMovie"
                    id="SearchMovie"
                ></input>
            </div>
        </div>
    );
};

export default SearchForm;