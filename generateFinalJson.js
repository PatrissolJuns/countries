/* The goal is to produce a unique json made with both country's data and emoji flag */
const fs = require('fs');
const countriesSpec = require('./baseJson/countriesSpec.json');
const countryFlags = require('./baseJson/countriesFlagEmoji.json');

const countries = [];
const baseUrl = "https://raw.githubusercontent.com/PatrissolJuns/countries/main/data/";

countriesSpec.forEach(country => {
   const cf = countryFlags[country.alpha2Code];
   if (cf) {
      const prefix = country.alpha3Code.toLowerCase();
      country.flag = {
         emoji: cf.emoji,
         unicode: cf.unicode,
         image: baseUrl + prefix + '.svg'
      };
      country.map = {
         geo: baseUrl + prefix + '.geo.json',
         topo: baseUrl + prefix + '.topo.json',
      }
      countries.push(country);
   }
});

const json = JSON.stringify(countries);
fs.writeFileSync('./countries.json', json, 'utf8');

