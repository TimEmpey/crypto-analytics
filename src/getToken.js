// export default class WeatherService {  
//   static getWeather(city) {
//     return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
//       .then(function(response) {
//         if (!response.ok) {
//           const errorMessage = `${response.status} ${response.statusText}`;
//           throw new Error(errorMessage);
//         } else {
//           return response.json();
//         }
//       })      
//       .catch(function(error) {
//         return error;
//       });
//   }
// }

export default class TokenService {
  static getToken(ids, intervals) {
    return fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=${ids}&intervals=${intervals}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}

// function getToken
//   let request = new XMLHttpRequest();
//   const url = ``;
  
//   request.addEventListener("loadend", function() {
//     const response = JSON.parse(this.responseText);
//     if (this.status === 200 && emptyError === 0) {
//       printElements(response, intervals, num);
//     }
//   });
//   request.open("GET", url, true);
//   request.send();
// }