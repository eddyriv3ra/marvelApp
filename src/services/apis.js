import axios from "axios";

const hash =
  "&ts=1&apikey=508dfef6ad8ecc046b84be570d8ab372&hash=afa0ce68cff53edcda03339bc63595aa";

const marvelUrl = "https://gateway.marvel.com:443/v1/public/characters";

export const getInitialData = async () => {
  const offset = Math.floor(Math.random() * 1485) + 1;
  const urlAPI = `${marvelUrl}?limit=8&offset=${offset}${hash}`;
  const result = await axios(urlAPI);
  return result.data.data.results;
};

export const getDataByKeyword = async (keyword, source) => {
  const urlAPI = `${marvelUrl}?nameStartsWith=${keyword}&limit=8${hash}`;
  const result = await axios.get(urlAPI, {
    cancelToken: source.token,
  });
  const resultQuery = result.data.data.results;
  return resultQuery;
};

export const getComicsByCharaterId = async (characterId) => {
  const urlAPI = `${marvelUrl}/${characterId}/comics?format=comic&formatType=comic&orderBy=onsaleDate${hash}`;
  const result = await axios(urlAPI);
  return result.data.data.results;
};
