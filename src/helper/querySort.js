export const getSortCity = ( array, temperature, humidity ) =>  new Promise((resolve, reject) => {
    if( Object.keys(array).length ) {
        const similarCity = array.data.list.sort( (a, b) =>
            Math.abs(temperature - a.main.temp) - Math.abs(temperature - b.main.temp)
            // &&
            // Math.abs(temperature - a.main.humidity) - Math.abs(temperature - b.main.humidity)
        )[0];

        const arraySort = array.data.list.sort( (a, b) => {
            return  b.main.temp - a.main.temp
        });

        resolve([arraySort, similarCity]);
    }
    else {
        reject('Did\'n have City ')
    }
});