
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