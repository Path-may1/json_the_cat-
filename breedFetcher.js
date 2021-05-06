const argv = process.argv[2];
console.log(argv);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${argv}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);// Print the error if one occurred
  } else {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    const data = JSON.parse(body);
   //console.log("the first element of date :", data['id']);
   console.log(typeof data);
   console.log("the first element of data :", data[0].description);
   // if breed not found 
    if (!argv) {
  console.log('body:', body); // Print the HTML for the Google homepage.
} else
     console.log(`breed not found,${argv}`)
};
});