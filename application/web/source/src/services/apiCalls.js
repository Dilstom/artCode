import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getHotCoffee = () => {
  return axios
    .get(`${baseUrl}/hot`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getIcedCoffee = () => {
  return axios
    .get(`${baseUrl}/iced`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
