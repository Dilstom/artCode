import axios from "axios";

export const getAllArtworks = () => {
  return axios
    .get(`https://api.artic.edu/api/v1/artworks`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
