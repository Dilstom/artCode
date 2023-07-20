const baseUrl = process.env.REACT_APP_BASE_URL;

const getHotCoffee = async () => {
  try {
    const response = await fetch(`${baseUrl}/hot`);
    const hotCoffee = await response.json();
    return hotCoffee;
  } catch (error) {
    throw error;
  }
};

const getIcedCoffee = async () => {
  try {
    const response = await fetch(`${baseUrl}/iced`);
    const icedCoffee = await response.json();
    return icedCoffee;
  } catch (error) {
    throw error;
  }
};

module.exports = { getHotCoffee, getIcedCoffee };
