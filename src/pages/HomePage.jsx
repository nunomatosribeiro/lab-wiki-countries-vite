import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function HomePage() {
    const [countries, setCountries] = useState([])

    useEffect( () =>{
        const countryList = async () =>{
            try{
            const response = await axios.get('https://ih-countries-api.herokuapp.com/countries')        
    setCountries(response.data)
    console.log(response.data)

} catch(error){
    console.error('Error', error)
}
}
countryList()

    }, []);

  

return(

    <div>
        <h1>WikiCountries: Your Guide to the World</h1>
        <div>

{countries.map((country) =>(
   
        <div key={country.alpha3Code} style= {{padding: "10px", border:"1px solid", borderCollapse: "collapse" }}>
           <Link to={`/country/${country.alpha3Code}`}> <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='flag' /></Link>
            <Link to={`/country/${country.alpha3Code}`}> {country.name.common}</Link></div>

        )    
    )}

</div>
    </div>
)
}

export default HomePage;