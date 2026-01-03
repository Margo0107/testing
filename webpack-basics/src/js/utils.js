const city = "Sumy";
const units = "metric";
const lang = "uk";
const apiKey = "886e80809c613062d67c25b258bf1249";

export const url =
  `https://api.openweathermap.org/data/2.5/weather` +
  `?q=${city}` +
  `&units=${units}` +
  `&lang=${lang}` +
  `&appid=${apiKey}`;
