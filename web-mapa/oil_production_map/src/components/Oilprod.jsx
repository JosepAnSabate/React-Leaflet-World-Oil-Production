import React, {useState, useEffect} from 'react';  // IMPORTS FOR HOOK EFFECT
import ReactDOM from "react-dom";
import Loading from './Loading';
import Legend from './Legend';
import OilMap from './OilMap';
import LoadCountriesTask from '../tasks/LoadCountriesTask';
import legendItems from '../entities/LegendItems';


const OilProduction = () => {
  const [countries, setCountries] = useState([]);
  //console.log(countries.length);
  
  const legendItemsReverse = [...legendItems].reverse();


  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };
  //charging country data 
  useEffect(load, []); // page load -> we tell it that it will be track [] componenDidMount

  // colon is used as a ternary aperator https://reactjs.org/docs/conditional-rendering.html
  return <div>
      {countries.length === 0 ? <Loading /> : <div><OilMap  countries={countries} />
      <Legend legendItems={legendItemsReverse} Reverse/>
      </div> }
      </div> 
  }
 
export default OilProduction;