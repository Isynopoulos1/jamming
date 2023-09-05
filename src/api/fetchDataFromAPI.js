// information to reach API

export const fetchDataFromAPI = async (search) => {
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
    console.log("this is the search", search);

    const response = await fetch(
      `${url}?q=${search}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
