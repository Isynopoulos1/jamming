import React from "react";

// information to reach API

const apiKey = "7cba1af877msh5380ce6b5dc7836p12389cjsn7b806c27fd2e";

// Asynchronous functions

const url =
  "https://spotify23.p.rapidapi.com/search/?q=playlists&type=multi&offset=0&limit=10&numberOfTopResults=5";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
