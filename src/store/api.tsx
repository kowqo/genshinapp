export const API_URL = 'https://api.genshin.dev';

export const fetchWithMethodGet = (
  url: String,
  funcName: String,
  errorData = null,
) => {
  return fetch(API_URL + url)
    .then(response => response.json())
    .catch(e => {
      console.log(`${funcName} exeption:`, e);

      return errorData;
    });
};
