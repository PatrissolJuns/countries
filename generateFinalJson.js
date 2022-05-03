/* The goal is to produce a unique json made with both country's data and emoji flag */
const fs = require('fs');
const countriesSpec = require('./baseJson/countriesSpec.json').data;
const countryFlags = require('./baseJson/countriesFlagEmoji.json');

const countries = [];
const baseUrl = "https://github.com/PatrissolJuns/countries/data/";

countriesSpec.forEach(country => {
   const cf = countryFlags[country.alpha2Code];
   if (cf) {
      country.flag = {
         emoji: cf.emoji,
         unicode: cf.unicode,
         image: baseUrl + country.alpha2Code + '.svg'
      };
      country.map = {
         geo: baseUrl + country.alpha2Code + '.geo.json',
         topo: baseUrl + country.alpha2Code + '.topo.json',
      }
      countries.push(country);
   }
});

const json = JSON.stringify(countries);
fs.writeFileSync('./countries.json', json, 'utf8');

