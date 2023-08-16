import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "e2aaf4950cmsha876c15304ffa36p1e09eajsn25b99d5c6089",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
