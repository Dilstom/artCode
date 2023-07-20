const { getHotCoffee, getIcedCoffee } = require("../../services/apiCalls.js");

describe("gets coffee", () => {
  it("should return hot coffee when API call is successful", async () => {
    const mockResponseHot = [
      {
        title: "Black",
        description:
          "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
        ingredients: ["Coffee"],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG",
        id: 1,
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponseHot),
      })
    );

    const products = await getHotCoffee();
    expect(products).toEqual(mockResponseHot);
  });
  it("should throw an error when API call fails", async () => {
    const mockErrorMessage = new Error("API error");
    global.fetch.mockRejectedValue(mockErrorMessage);

    await expect(getHotCoffee()).rejects.toThrow(mockError);
  });

  it("should return iced coffee when API call is successful", async () => {
    const mockResponseIced = [
      {
        title: "Iced Coffee",
        description:
          "A coffee with ice, typically served with a dash of milk, cream or sweetener—iced coffee is really as simple as that.",
        ingredients: ["Coffee", "Ice", "Sugar*", "Cream*"],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Bottle%2C_Kyoto_Style_Ice_Coffee_%285909775445%29.jpg",
        id: 1,
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponseIced),
      })
    );
    const products = await getIcedCoffee();
    expect(products).toEqual(mockResponseIced);
  });
});
