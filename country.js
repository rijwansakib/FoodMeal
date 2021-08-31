const country=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>dispalyCountrys(data))
}
//call country 
country();

// display Country's 

const dispalyCountrys=(countrys)=>{

    const countryElement=document.getElementById('country-part')

    for( const country of countrys){
        // country 
        const div=document.createElement('div')
        div.classList.add('country')
        div.innerHTML=`
        <h4>NMAE</h4>
         <h2>${country.name}</h2>
         <button onclick=detailsLoadData('${country.name}') >Details</button>
       `;
        countryElement.appendChild(div)

    }
}
    const detailsLoadData = name => {
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>dispalydata(data[0]));

    }



    const dispalydata=country=>{

        const countryDiv=document.getElementById('country-details');
        countryDiv.innerHTML=`
        <img width="200px" src="${country.flag}">
        <h3>NMAE:${country.name}</h3>
        <h3>NativeName:${country.nativeName}</h3>
        <h3>Alpha-Code:${country.alpha3Code}</h3>
        <h3>Capital:${country.capital}</h3>
        <h3>Population:${country.population}</h3>
        <h3>Subregion:${country.subregion}</h3>
        <h3>Region:${country.region}</h3>
        <h3>Borders:${country.borders}</h3>
 
        
        `
    
    }