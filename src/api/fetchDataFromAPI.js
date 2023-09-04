// information to reach API

export const fetchDataFromAPI = async () => {
  // information to reach API
  const apiKey = process.env.REACT_APP_SPOTIFY_API_KEY;

  // Asynchronous functions
  const url = process.env.REACT_APP_SPOTIFY_URL;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
