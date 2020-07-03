import axios from "axios";

const hash =
  "&ts=1&apikey=508dfef6ad8ecc046b84be570d8ab372&hash=afa0ce68cff53edcda03339bc63595aa";

const marvelUrl = "https://gateway.marvel.com:443/v1/public/characters";
const comicUrl = "https://gateway.marvel.com:443/v1/public/comics";
const lala =
  "https://gateway.marvel.com:443/v1/public/comics/70718?apikey=508dfef6ad8ecc046b84be570d8ab372";

export const getInitialData = async () => {
  const offset = Math.floor(Math.random() * 1485) + 1;
  const urlAPI = `${marvelUrl}?limit=8&offset=${offset}${hash}`;
  const result = await axios(urlAPI);
  return result.data.data.results;
};

export const getDataByKeyword = async (keyword, source) => {
  const { character, comic } = keyword;
  if (comic) {
    const comicAPI = `${comicUrl}/${comic}?${hash}`;
    const getComic = () => axios.get(comicAPI);
    const result = await getComic();
    console.log(result.data.data.results);
    return result.data.data.results;
  } else {
    const charactersAPI = `${marvelUrl}?nameStartsWith=${character}${hash}`;
    const comicAPI = `${comicUrl}?titleStartsWith=${character}${hash}`;

    const getCharacters = () =>
      axios.get(charactersAPI, {
        cancelToken: source.token,
      });
    const getComic = () =>
      axios.get(comicAPI, {
        cancelToken: source.token,
      });

    const result = await axios.all([getCharacters(), getComic()]);

    console.log(result);

    const mergeResults = [
      ...result[0].data.data.results,
      ...result[1].data.data.results,
    ];

    const resultQuery = mergeResults;
    return resultQuery;
  }
};

export const getComicsByCharaterId = async (characterId) => {
  const urlAPI = `${marvelUrl}/${characterId}/comics?format=comic&formatType=comic&orderBy=onsaleDate${hash}`;
  const result = await axios(urlAPI);
  return result.data.data.results;
};
