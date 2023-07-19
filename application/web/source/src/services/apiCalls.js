import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getAllArtworks = () => {
  return axios
    .get(`${baseUrl}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
