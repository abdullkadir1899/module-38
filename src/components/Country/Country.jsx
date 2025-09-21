import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {

const [visited, setVisited] = useState(false);
// console.log(handleVisitedCountries)

const handleVisited = () => {
    // console.log('btn click')

    // basic system
    // if(visited){
    //     setVisited(false)
    // }
    // else{
    //     setVisited(true)
    // }

    // second system
    // setVisited(visited ? false : true)

    // third system
    setVisited(!visited)
    handleVisitedCountries(country)
}

 

    // console.log(country.area.area)
    return (
        // <div className={`country ${visited ? 'country-visited': 'country-not-visited' } ` }>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? 'BigCountry' : 'small country'}</p>
            <button  onClick={handleVisited}>
                {
                    visited ? 'visited' : 'not visisted'
                }
            </button>
            <button>Add visited Flag </button>
        </div>
    );
};

export default Country;


/**
 * 
 */