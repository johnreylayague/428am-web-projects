import axios from "axios";

const URL = "https://geocoding-api.open-meteo.com/v1/search";

export const fetchWeather = async (query: string) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        name: query,
        count: 1,
        language: "en",
        format: "json",
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};
