const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//get the serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// get the host (root domain)
console.log(myUrl.host);

//get the hostname (does not get port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));