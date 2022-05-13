const request = require("request");

const fetchBreedDescription = function (breed) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      if (error) {
        return;
      }

      const data = JSON.parse(body);
      const descrip = data[0].description;
      console.log(descrip);

      if (data.length === 0) {
        console.log("Requested breed is not found");
      }
    }
  );
};
module.exports = { fetchBreedDescription };
