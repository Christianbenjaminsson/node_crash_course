const url = require('url');

const adress = 'https://www.google.com/search?q=aftonbladet&rlz=1C5CHFA_enSE937SE937&oq=aftonbladet&aqs=chrome..69i57j0i131i433j0i433j0i131i433l3j0l3.2435j0j15&sourceid=chrome&ie=UTF-8';

const parsedUrl = url.parse(adress, true);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.query);