/**
 * Handle country's details
 */
const Countries = require('./countries.json');

/**
 * Language supported for country name
 */
export interface Lang {
    readonly br: string;
    readonly de: string;
    readonly es: string;
    readonly fa: string;
    readonly fr: string;
    readonly hr: string;
    readonly it: string;
    readonly ja: string;
    readonly nl: string;
    readonly pt: string;
}

export type Country = {
    alpha2Code: string;
    alpha3Code: string;
    altSpellings: string[];
    area: string;
    borders: string[];
    callingCodes: string[];
    capital: string;
    cioc: string;
    currencies: Array<{
        code: string;
        name: string;
        symbol: string;
    }>;
    demonym: string;
    flag: {
        emoji: string,
        unicode: string,
        image: string
    };
    gini: string;
    languages: Array<{
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }>;
    latlng: [number, number];
    name: string;
    nativeName: string;
    numericCode: string;
    map: {
        geo: string,
        topo: string,
    };
    population: number;
    region: string;
    regionalBlocs: string[];
    subregion: string;
    timezones: string[];
    topLevelDomain: string[];
    translations: Lang
}

class CountryManager {
    private readonly countries: Country[];

    constructor() {
        this.countries = Countries;
    }

    getCountryFromAlpha3Code = (alpha3Code: string) : Country | null => {
        const item = this.countries.find(c => c.alpha3Code === alpha3Code.toUpperCase());
        return item || null;
    };

    getCountryFromAlpha2Code = (alpha2Code: string) : Country | null => {
        const item = this.countries.find(c => c.alpha2Code === alpha2Code.toUpperCase());
        return item || null;
    };
}

export default new CountryManager();
