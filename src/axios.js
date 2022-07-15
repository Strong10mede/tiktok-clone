const axios = require("axios");

const setData = () => {
  const options = {
    method: "GET",
    url: "https://tiktok82.p.rapidapi.com/getUserVideos",
    params: {
      user_id: "6676352751163032582",
      secUid:
        "MS4wLjABAAAAsY6EjWejsVbCjir7Vdy-uNX364xNywkQSLqqoV5Hcnt7v3CVToFzfIgcdpQ_iW3D",
    },
    headers: {
      "X-RapidAPI-Key": "d261095197msh9163bb5aca3e171p13b17ajsn6dce00ba0303",
      "X-RapidAPI-Host": "tiktok82.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      let data = response.data;
      return { data };
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default setData;
