import papa from 'papaparse'
import dataCountries from "../data/countries.json";
import legendItems from '../entities/LegendItems';


class LoadCountriesTask {
    oilWorldProdUrl =
        "https://raw.githubusercontent.com/JosepAnSabate/dades-oil-world-production/main/df_oil_year.csv"; 
    // papaparse will convert a csv to a json

    setState= null;
    mapCountries = dataCountries.features;

    load = (setState)  => {
        this.setState = setState;
        papa.parse(this.oilWorldProdUrl, {
            download:true,
            header:true, // first line of csv is header
            complete:(result)=> this.#processOilData(result.data)
        });
       // setState(dataCountries.features);
        //console.log(dataCountries.features);
    }

    #processOilData = (oilCountries)=>{
        //console.log(oilCountries);
        for (let i = 0; i < this.mapCountries.length; i++) {
            const mapCountry = this.mapCountries[i];
            const oilCountry = oilCountries.find((oilCountry) =>
                 oilCountry.Code === mapCountry.properties.ISO_A3);  // find first match
            
                 mapCountry.properties.confirmed = 0;
                 mapCountry.properties.confirmedText = "0 - 5"; // default value of prod

                 if(oilCountry != null //|| oilCountry != 'NaN'
                 ){
                     const confirmed = Number(oilCountry.oilpr_milbb);
                     mapCountry.properties.confirmed = confirmed;
                     mapCountry.properties.confirmedText = confirmed;//this.#formatNumberWithCommas(confirmed);
                 }
                 // color country
                 this.#setCountryColor(mapCountry);
        }
    this.setState(this.mapCountries);
    }
    #setCountryColor = (mapCountry) => {
        const legendItem = legendItems.find((legendItem) => 
        legendItem.isFor(mapCountry.properties.confirmed)
        );
        if (legendItem != null) {
            mapCountry.properties.color = legendItem.color;
        }
    }

    // #formatNumberWithCommas = (number) => {
    //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
};




export default LoadCountriesTask;