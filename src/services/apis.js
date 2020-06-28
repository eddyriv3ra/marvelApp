import axios from "axios";

export const getInitialData = async () => {
  const offset = Math.floor(Math.random() * 1485) + 1;
  const urlAPI = `https://gateway.marvel.com:443/v1/public/characters?limit=8&offset=${offset}&ts=1&apikey=508dfef6ad8ecc046b84be570d8ab372&hash=afa0ce68cff53edcda03339bc63595aa`;
  const result = await axios(urlAPI);
  return result.data.data.results;
};

export const getDataByKeyword = async (keyword, source) => {
  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${keyword}&limit=8&ts=1&apikey=508dfef6ad8ecc046b84be570d8ab372&hash=afa0ce68cff53edcda03339bc63595aa`;
  const result = await axios.get(url, {
    cancelToken: source.token,
  });
  const resultQuery = result.data.data.results;
  return resultQuery;
};
