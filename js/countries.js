// async function loadCountries () {
//   const response = await fetch('https://restcountries.com/v3.1/all');
//   //console.log(response);
//     return await response.json();

// }
// console.log(loadCountries);

const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    //console.log(countries);
    const countriesHtml = countries.map(country => getCountryHtml(country));
    //console.log(countriesHtml);
    const contaiener = document.getElementById('countries');
    contaiener.innerHTML = countriesHtml.join(' ');
}

const getCountryHtml = country =>{
    return`
    <div class="country">
         <h2>${country.name.common}</h2>
         <img src="${country.flags.png}"> 
    </div>
    
    `
}
loadCountries();