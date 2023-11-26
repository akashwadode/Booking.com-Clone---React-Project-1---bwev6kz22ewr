import React from 'react'
import DateRangeComponent from './DateRangeComponent'
import "./Styles/searchFilterBox.css"
const SearchFilter = () => {
  return (
    <div id='search-filter-container'>
        <h4>Search Filter</h4>
        <form id='filter-form'>
            <label htmlFor='location'>Location :</label>
            <input type='text' id='location' name='location' />
            
            <div><DateRangeComponent /></div>
            
        </form>
    </div>
  )
}

export default SearchFilter