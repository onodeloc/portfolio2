import fetch from "node-fetch";

const getPost = (lat, lon, API) => {
  fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API}`)
    .then(response => response.json())
    .then(data => console.log(data));
};

getPost(1,1,"da7baf20495e7f43d736127763cae39d");