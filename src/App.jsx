import "./App.css";
//import {useState} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import HomePage from "./pages/HomePage.jsx";
import CountryDetails from "./pages/CountryDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <div className="App">
      <Navbar />
      
      
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/country/:alpha3Code' element={<CountryDetails />} />
    <Route path="*" element={ <ErrorPage /> } /> 
    </Routes>
   
    </div>
  );
}

export default App;
