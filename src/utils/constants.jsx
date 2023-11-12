export const API_Options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};
console.log("Bearer " + process.env.REACT_APP_TMDB_API_KEY);

export const img_cdn_url = "https://image.tmdb.org/t/p/w500/";

export const Open_API_Key = process.env.REACT_APP_Open_API_Key;
console.log("open Api Key :  " + Open_API_Key);

export const Supported_Languages = [
  {
    name: "English",
    value: "en",
  },
  {
    name: "Telugu",
    value: "telugu",
  },
  {
    name: "Hindi",
    value: "hindi",
  },
  {
    name: "Spanish",
    value: "spanish",
  },
];

export const Header_list = [
  "Home",
  "TV Shows",
  "Movies",
  "New & Popular",
  "My List",
];
