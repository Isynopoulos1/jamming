// information to reach API

export const getTracks = async (search, token) => {
  const url = process.env.REACT_APP_SPOTIFY_URL;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(
      `${url}/search?q=${search}&type=track&offset=0&limit=10&numberOfTopResults=5`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
