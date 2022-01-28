function user() {
  fetch('https://api.ipify.org/?format=json')
    .then(results => {
      return results.json();
    })
    .then(data => {
      userLocation(data.ip);
    })
    .catch(err => {
      console.error(err);
    })
  };
  function userLocation(ip) {
    fetch("https://weatherapi-com.p.rapidapi.com/ip.json?q="+ip, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "12b796900dmsh12b8fa6011f391ep1d4f63jsnff6a49444565"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
};
document.querySelector('#button').addEventListener('click', user);