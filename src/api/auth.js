export const authenticate = async () => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const uri = "https://accounts.spotify.com/api/token";
  const data = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: secret,
    scope: "user-library-modify",
  });
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data,
  };

  try {
    const res = await fetch(uri, options);
    const result = await res.json();

    return result;
  } catch (e) {
    console.error(e);
  }
};
