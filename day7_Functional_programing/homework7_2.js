// let allCovidData = [];
// let todayRecovered = '';
axios.get("https://disease.sh/v3/covid-19/countries").then(function (response) {
    const allCovidData = response.data;
    const todayRecovered = allCovidData.reduce((sum, country) => sum + country.todayRecovered, 0);
    console.log('todayRecovered: ' + todayRecovered);

    const results = allCovidData.filter((result) => result.todayDeaths < 10 && result.population > 100000000)
        .map((x) => x.country);

    console.log(results);
});

