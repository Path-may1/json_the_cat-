const fetchBreedDescription = function (breedName, callback) {

  // const argv = process.argv[2];
  // console.log(argv);

  const request = require('request');
  // if (!breedName) {
  //   console.log('body:', body); // Print the HTML for the Google homepage.
  // } 
  if (!breedName) {
    console.log('breed not supplied')
    return
  }

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      console.log('error:', error);// Print the error if one occurred
      return callback(error, null)
    } else {
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      const data = JSON.parse(body);
      const breed = data[0]
      //console.log(data)
      console.log(typeof data);
      console.log("breed", breed)

      // if breed not found 
      if (!breed) {
        console.log("breed not found")
        return callback("breed not found", null)
      }
      else {
        console.log(`breed is found,${breed.name}`)
        return callback(null, breed.description)
      }
    };
  });
}
module.exports = { fetchBreedDescription };