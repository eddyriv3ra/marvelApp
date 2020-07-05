const mockData = [
  {
    id: 1017603,
    name: "Spider-Gwen (Spider-Gwen)",
    description: "",
    modified: "2019-07-16T13:37:55-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/90/54edf8eb8f102",
      extension: "jpg",
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1017603",
    comics: {
      available: 104,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1017603/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/59897",
          name: "All-New Wolverine Annual (2016) #1",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/50350",
          name: "The Amazing Spider-Man (2014) #13",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/55319",
          name: "The Amazing Spider-Man (2015) #21",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/50955",
          name: "Edge of Spider-Verse (2014) #2",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/76995",
          name: "Ghost-Spider (2019) #1",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/76996",
          name: "Ghost-Spider (2019) #2",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/76997",
          name: "Ghost-Spider (2019) #3",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/76998",
          name: "Ghost-Spider (2019) #4",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/76999",
          name: "Ghost-Spider (2019) #5",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/84145",
          name: "Ghost-Spider (2019) #8",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/84146",
          name: "Ghost-Spider (2019) #9",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/84147",
          name: "Ghost-Spider (2019) #10",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/76954",
          name: "Ghost-Spider Annual (2019) #1",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/83440",
          name: "Marvel Action Spider-Man (2018) #2",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/83442",
          name: "Marvel Action Spider-Man (2018) #4",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/83443",
          name: "Marvel Action Spider-Man (2018) #5",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/83444",
          name: "Marvel Action Spider-Man (2018) #6",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/83445",
          name: "Marvel Action Spider-Man (2018) #7",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/83446",
          name: "Marvel Action Spider-Man (2018) #8",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/71956",
          name:
            "Marvel Super Hero Adventures: Captain Marvel - Mealtime Mayhem (2018) #1",
        },
      ],
      returned: 20,
    },
    series: {
      available: 31,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1017603/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/21853",
          name: "All-New Wolverine Annual (2016)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/19075",
          name: "Edge of Spider-Verse (2014)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/27622",
          name: "Ghost-Spider (2019)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/27606",
          name: "Ghost-Spider Annual (2019)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/29509",
          name: "Marvel Action Spider-Man (2018 - 2020)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/26234",
          name:
            "Marvel Super Hero Adventures: Captain Marvel - Mealtime Mayhem (2018)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/26904",
          name:
            "Marvel Super Hero Adventures: Spider-Man - Across the Spider-Verse (2019)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/26905",
          name:
            "Marvel Super Hero Adventures: Spider-Man - Web of Intrigue (2019)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/22535",
          name: "Prowler (2016 - 2017)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/26001",
          name: "Spider-Geddon (2018 - 2019)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/26020",
          name: "Spider-Geddon (2019)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/20505",
          name: "Spider-Gwen (2015 - 2018)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/19670",
          name: "Spider-Gwen (2015)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/21441",
          name: "Spider-Gwen Annual (2016)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/19671",
          name: "Spider-Gwen Vol. 0: Most Wanted? (2015)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/23871",
          name: "Spider-Gwen Vol. 2 (2018)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/22124",
          name: "SPIDER-GWEN VOL. 3: LONG-DISTANCE TPB (2017)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/22841",
          name: "Spider-Gwen Vol. 4: Predators (2017)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/24188",
          name: "Spider-Gwen Vol. 5: Gwenom (2018)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/25383",
          name: "Spider-Gwen Vol. 6: The Life of Gwen Stacy (2018)",
        },
      ],
      returned: 20,
    },
    stories: {
      available: 109,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1017603/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/112733",
          name: "cover from The Amazing Spider-Man (2014) #13",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/113112",
          name: "cover from Spider-Verse (2014) #1",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/113804",
          name: "cover",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/116619",
          name: "cover from Spider-Gwen (2015) #1",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/116621",
          name: "cover from Spider-Gwen (2015)",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/116631",
          name: "cover from Spider-Gwen (2015) #2",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/116635",
          name: "cover from Spider-Gwen (2015) #3",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/116637",
          name: "cover from Spider-Gwen (2015) #4",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/116639",
          name: "cover from Spider-Gwen (2015) #5",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/116729",
          name: "cover from Spider-Verse (2014) #2",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/121681",
          name: "cover from The Amazing Spider-Man (2015) #21",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/122391",
          name: "cover from Spider-Gwen (2015) #1",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/122395",
          name: "cover from Spider-Gwen (2015) #2",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/122399",
          name: "cover from Spider-Gwen (2015) #3",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/122401",
          name: "cover from Spider-Gwen (2015) #4",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/122403",
          name: "cover from Spider-Gwen (2015) #5",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/122407",
          name: "cover from Spider-Gwen (2015) #6",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/122409",
          name: "cover from Spider-Gwen (2015) #7",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/122411",
          name: "cover from Spider-Gwen (2015) #8",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/122413",
          name: "cover from Spider-Gwen (2015) #9",
          type: "cover",
        },
      ],
      returned: 20,
    },
    events: {
      available: 2,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1017603/events",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/events/332",
          name: "Dead No More: The Clone Conspiracy",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/events/321",
          name: "Spider-Verse",
        },
      ],
      returned: 2,
    },
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/comics/characters/1017603/spider-gwen_spider-gwen?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
      {
        type: "comiclink",
        url:
          "http://marvel.com/comics/characters/1017603/spider-gwen_spider-gwen?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
    ],
  },
  {
    id: 1011080,
    name: "Korg",
    description: "",
    modified: "2013-10-24T13:29:14-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/3/70/5269581a55d0c",
      extension: "jpg",
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1011080",
    comics: {
      available: 18,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011080/comics",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/4446",
          name: "Hulk (1999) #96",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/27399",
          name: "Hulk (1999) #103",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/30015",
          name: "Incredible Hulks (2010) #607 (MCGUINNESS VARIANT)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36774",
          name: "Incredible Hulks (2010) #613",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/30436",
          name: "Incredible Hulks (2010) #614",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/30437",
          name: "Incredible Hulks (2010) #615",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/30438",
          name: "Incredible Hulks (2010) #616",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/30439",
          name: "Incredible Hulks (2010) #617",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/31236",
          name: "Incredible Hulks (2010) #618",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/34050",
          name: "Incredible Hulks (2010) #619",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/34021",
          name: "Incredible Hulks (2010) #620",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/35101",
          name: "Incredible Hulks (2010) #621",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/35067",
          name: "Incredible Hulks (2010) #622",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36051",
          name: "Incredible Hulks (2010) #623",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/36050",
          name: "Incredible Hulks (2010) #624",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/38618",
          name:
            "Incredible Hulks (2010) #624 (CAPTAIN AMERICA 70TH ANNIVERSARY VARIANT)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/17361",
          name: "World War Hulk: Warbound (2007) #1",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/comics/23235",
          name: "World War Hulk: Warbound (2007) #5",
        },
      ],
      returned: 18,
    },
    series: {
      available: 3,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011080/series",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/465",
          name: "Hulk (1999 - 2008)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/8842",
          name: "Incredible Hulks (2010 - 2011)",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/series/3171",
          name: "World War Hulk: Warbound (2007)",
        },
      ],
      returned: 3,
    },
    stories: {
      available: 17,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011080/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/1274",
          name: "INCREDIBLE HULK (1999) #96",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/36394",
          name: "WORLD WAR HULK: WARBOUND (2007) #1",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/52658",
          name: "WORLD WAR HULK: WARBOUND (2007) #5",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/68650",
          name: "INCREDIBLE HULK (1999) #103",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/69700",
          name: "INCREDIBLE HULKS (2010) #615",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/69703",
          name: "Interior #69703",
          type: "interiorStory",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/69705",
          name: "Interior #69705",
          type: "interiorStory",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/71182",
          name: "Interior #71182",
          type: "interiorStory",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/76015",
          name: "Interior From Incredible Hulks (2009) #619",
          type: "interiorStory",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/76109",
          name: " Interior #76109",
          type: "interiorStory",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/77708",
          name: "Interior #77708",
          type: "interiorStory",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/79786",
          name: "Interior #79786  ",
          type: "interiorStory",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/79788",
          name: "INCREDIBLE HULKS #623",
          type: "interiorStory",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/83364",
          name: "INCREDIBLE HULKS (2010) #613",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/89199",
          name: "Incredible Hulks #622",
          type: "interiorStory",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/94793",
          name: "Incredible Hulks (2009) #607, MCGUINNESS VARIANT",
          type: "cover",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/96368",
          name: "INCREDIBLE HULKS (2010) #614",
          type: "cover",
        },
      ],
      returned: 17,
    },
    events: {
      available: 2,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011080/events",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/events/296",
          name: "Chaos War",
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/events/212",
          name: "Planet Hulk",
        },
      ],
      returned: 2,
    },
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/comics/characters/1011080/korg?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
      {
        type: "wiki",
        url:
          "http://marvel.com/universe/Korg?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
      {
        type: "comiclink",
        url:
          "http://marvel.com/comics/characters/1011080/korg?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
    ],
  },
  {
    id: 1017315,
    name: "Thor (Marvel Heroes)",
    description: "",
    modified: "2013-09-18T10:52:05-0400",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/c/20/5239be0b8ecd1",
      extension: "jpg",
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1017315",
    comics: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1017315/comics",
      items: [],
      returned: 0,
    },
    series: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1017315/series",
      items: [],
      returned: 0,
    },
    stories: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1017315/stories",
      items: [],
      returned: 0,
    },
    events: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1017315/events",
      items: [],
      returned: 0,
    },
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/characters/60/thor?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
      {
        type: "comiclink",
        url:
          "http://marvel.com/comics/characters/1017315/thor_marvel_heroes?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
    ],
  },
  {
    id: 1011280,
    name: "Rafael Vega",
    description: "",
    modified: "1969-12-31T19:00:00-0500",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      extension: "jpg",
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1011280",
    comics: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011280/comics",
      items: [],
      returned: 0,
    },
    series: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011280/series",
      items: [],
      returned: 0,
    },
    stories: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011280/stories",
      items: [],
      returned: 0,
    },
    events: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011280/events",
      items: [],
      returned: 0,
    },
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/characters/2906/rafael_vega?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
      {
        type: "wiki",
        url:
          "http://marvel.com/universe/Rafael%20Vega?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
      {
        type: "comiclink",
        url:
          "http://marvel.com/comics/characters/1011280/rafael_vega?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
    ],
  },
  {
    id: 1011153,
    name: "Proemial Gods",
    description: "",
    modified: "1969-12-31T19:00:00-0500",
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4c002f51c9436",
      extension: "jpg",
    },
    resourceURI: "http://gateway.marvel.com/v1/public/characters/1011153",
    comics: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011153/comics",
      items: [],
      returned: 0,
    },
    series: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011153/series",
      items: [],
      returned: 0,
    },
    stories: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011153/stories",
      items: [],
      returned: 0,
    },
    events: {
      available: 0,
      collectionURI:
        "http://gateway.marvel.com/v1/public/characters/1011153/events",
      items: [],
      returned: 0,
    },
    urls: [
      {
        type: "detail",
        url:
          "http://marvel.com/characters/1806/proemial_gods?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
      {
        type: "wiki",
        url:
          "http://marvel.com/universe/Proemial_Gods?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
      {
        type: "comiclink",
        url:
          "http://marvel.com/comics/characters/1011153/proemial_gods?utm_campaign=apiRef&utm_source=508dfef6ad8ecc046b84be570d8ab372",
      },
    ],
  },
];

export default mockData;
