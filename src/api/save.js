export const saveTrack = async (trackId, token) => {
  const url = process.env.REACT_APP_SPOTIFY_URL;

  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await fetch(`${url}/me/tracks?ids=${trackId}`, options);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error de red:", error);
  }
};
