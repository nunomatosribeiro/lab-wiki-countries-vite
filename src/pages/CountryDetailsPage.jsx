import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function CountryDetails() {
    const { alpha3Code } = useParams()
const [countryData, setCountryData] = useState({})
//const [isLoading, setIsLoading] = useState(true)

    useEffect (() =>{
        const countryDetailsData = async () =>{
            try{
                const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
                setCountryData(response.data)
                console.log(response.data)
            }
            catch(error){
                console.error('Error', error)
            }
        }
        countryDetailsData()
    }, [alpha3Code])

    return(
<>
    <h1>Country Details</h1>
    {Object.keys(countryData).length === 0 ? (
        <div>Loading...</div>
        ) : (
<div>
<p>Country name: {countryData.name.common}</p>
<p>Capital: {countryData.capital}</p>
<p>Area: {countryData.area}m2</p>
 <p>Borders:
    {countryData.borders.map((border) => {
        return (
 <Link
 key={border}
 to={`/country/${border}`}
 style={{ display: 'block', marginBottom: '5px' }}>
    {border}</Link>
    )
 })}
    </p>
    
</div>
        )}

    </>
    )
}

export default CountryDetails;
