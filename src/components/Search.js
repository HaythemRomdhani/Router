import React  from 'react'
import './Search.css';
import StarRatingComponent from "react-star-rating-component";
function Search(props) {
    
    const handleChange = (event) => props.setKeyTitle(event.target.value);
  const handleRateChange = (value) => props.setKeyRate(value);
    return (
    <div>
        <form className="form" > 
            <label className="label" >Movie Name</label>  
            <input className="input" type="text" name="search" placeholder="i.e.your serie or movie"  onChange={handleChange} />
            <button className="button" type="submit">Search</button>  
            <StarRatingComponent name="ratingRes" onStarClick={handleRateChange}/>
        </form>
        
    </div>
    )
}

export default Search
