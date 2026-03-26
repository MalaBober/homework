export const ecoParks = [
    {
      id: 1,
      name: "Eco Park 1",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.0805,
          lng: 23.6572,
        },
      },
      sizeHectares: 557,
      established: 1970,
      biodiversity: {
        speciesCount: 490,
        protectedSpecies: 1,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 92,
        bikeRoutesKm: 51,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      lakes: [
        {
          name: "Lake 1-1",
          areaHa: 42,
          swimmable: true,
        },
        {
          name: "Lake 1-2",
          areaHa: 37,
          swimmable: false,
        },
        {
          name: "Lake 1-3",
          areaHa: 7,
          swimmable: true,
        },
      ],
      entryFee: 8.46,
      ratings: {
        average: 4.7,
        reviews: 2169,
      },
      tags: ["hiking", "family", "photography"],
    },
    {
      id: 2,
      name: "Eco Park 2",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1486,
          lng: 23.836,
        },
      },
      sizeHectares: 2567,
      established: 1971,
      biodiversity: {
        speciesCount: 74,
        protectedSpecies: 54,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 86,
        bikeRoutesKm: 50,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 1.1,
        reviews: 4831,
      },
      tags: ["nature", "family", "wildlife"],
    },
    {
      id: 3,
      name: "Eco Park 3",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9398,
          lng: 23.0151,
        },
      },
      sizeHectares: 2070,
      established: 1972,
      biodiversity: {
        speciesCount: 258,
        protectedSpecies: 51,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 65,
        bikeRoutesKm: 7,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife"],
        },
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 13.6,
      },
      lakes: [
        {
          name: "Lake 3-1",
          areaHa: 17,
          swimmable: true,
        },
        {
          name: "Lake 3-2",
          areaHa: 40,
          swimmable: true,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 3.2,
        reviews: 1675,
      },
      tags: ["nature", "hiking", "wildlife"],
    },
    {
      id: 4,
      name: "Eco Park 4",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1631,
          lng: 23.1868,
        },
      },
      sizeHectares: 3460,
      established: 1973,
      biodiversity: {
        speciesCount: 1197,
        protectedSpecies: 74,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 30,
        bikeRoutesKm: 48,
      },
      lakes: [
        {
          name: "Lake 4-1",
          areaHa: 33,
          swimmable: true,
        },
        {
          name: "Lake 4-2",
          areaHa: 21,
          swimmable: true,
        },
      ],
      entryFee: 5.07,
      ratings: {
        average: 3.6,
        reviews: 3518,
      },
      tags: ["hiking", "family", "wildlife", "photography"],
    },
    {
      id: 5,
      name: "Eco Park 5",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.6409,
          lng: 23.4564,
        },
      },
      sizeHectares: 2054,
      established: 1974,
      biodiversity: {
        speciesCount: 612,
        protectedSpecies: 25,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 68,
        bikeRoutesKm: 34,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 1.6,
        reviews: 4367,
      },
      tags: ["hiking", "wildlife", "photography"],
    },
    {
      id: 6,
      name: "Eco Park 6",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.4508,
          lng: 23.3592,
        },
      },
      sizeHectares: 4992,
      established: 1975,
      biodiversity: {
        speciesCount: 111,
        protectedSpecies: 42,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 44,
        bikeRoutesKm: 3,
      },
      entryFee: 9.94,
      ratings: {
        average: 3.1,
        reviews: 1777,
      },
      tags: ["nature", "wildlife"],
    },
    {
      id: 7,
      name: "Eco Park 7",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1181,
          lng: 23.4634,
        },
      },
      sizeHectares: 4761,
      established: 1976,
      biodiversity: {
        speciesCount: 1181,
        protectedSpecies: 45,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 72,
        bikeRoutesKm: 39,
      },
      lakes: [
        {
          name: "Lake 7-1",
          areaHa: 10,
          swimmable: false,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 2.3,
        reviews: 3245,
      },
      tags: ["hiking", "wildlife", "photography"],
    },
    {
      id: 8,
      name: "Eco Park 8",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3191,
          lng: 23.4791,
        },
      },
      sizeHectares: 2435,
      established: 1977,
      biodiversity: {
        speciesCount: 632,
        protectedSpecies: 62,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 43,
        bikeRoutesKm: 41,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      lakes: [
        {
          name: "Lake 8-1",
          areaHa: 52,
          swimmable: true,
        },
        {
          name: "Lake 8-2",
          areaHa: 47,
          swimmable: false,
        },
      ],
      entryFee: 1.5,
      ratings: {
        average: 3.5,
        reviews: 4033,
      },
      tags: ["nature", "family", "wildlife"],
    },
    {
      id: 9,
      name: "Eco Park 9",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.4055,
          lng: 23.4906,
        },
      },
      sizeHectares: 3851,
      established: 1978,
      biodiversity: {
        speciesCount: 630,
        protectedSpecies: 63,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 90,
        bikeRoutesKm: 67,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 12.7,
      },
      entryFee: 5.93,
      ratings: {
        average: 2.5,
        reviews: 355,
      },
      tags: ["nature", "family", "photography"],
    },
    {
      id: 10,
      name: "Eco Park 10",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9164,
          lng: 23.2746,
        },
      },
      sizeHectares: 406,
      established: 1979,
      biodiversity: {
        speciesCount: 372,
        protectedSpecies: 20,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 70,
        bikeRoutesKm: 13,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      entryFee: 2.96,
      ratings: {
        average: 0.4,
        reviews: 767,
      },
      tags: ["family", "wildlife", "photography"],
    },
    {
      id: 11,
      name: "Eco Park 11",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3401,
          lng: 23.5023,
        },
      },
      sizeHectares: 3229,
      established: 1980,
      biodiversity: {
        speciesCount: 1121,
        protectedSpecies: 67,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 46,
        bikeRoutesKm: 72,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      lakes: [
        {
          name: "Lake 11-1",
          areaHa: 42,
          swimmable: true,
        },
      ],
      entryFee: 5.18,
      ratings: {
        average: 2.5,
        reviews: 4286,
      },
      tags: ["nature", "hiking", "photography"],
    },
    {
      id: 12,
      name: "Eco Park 12",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3761,
          lng: 23.2071,
        },
      },
      sizeHectares: 3988,
      established: 1981,
      biodiversity: {
        speciesCount: 530,
        protectedSpecies: 69,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 34,
        bikeRoutesKm: 54,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      entryFee: 3.27,
      ratings: {
        average: 2.9,
        reviews: 2773,
      },
      tags: ["hiking", "family"],
    },
    {
      id: 13,
      name: "Eco Park 13",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.6921,
          lng: 23.1422,
        },
      },
      sizeHectares: 4300,
      established: 1982,
      biodiversity: {
        speciesCount: 299,
        protectedSpecies: 64,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 79,
        bikeRoutesKm: 4,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 3.4,
        reviews: 2472,
      },
      tags: ["nature", "hiking", "wildlife"],
    },
    {
      id: 14,
      name: "Eco Park 14",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3851,
          lng: 23.52,
        },
      },
      sizeHectares: 2324,
      established: 1983,
      biodiversity: {
        speciesCount: 932,
        protectedSpecies: 25,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 113,
        bikeRoutesKm: 35,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife"],
        },
      },
      lakes: [
        {
          name: "Lake 14-1",
          areaHa: 11,
          swimmable: false,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 3.5,
        reviews: 3104,
      },
      tags: ["nature", "family"],
    },
    {
      id: 15,
      name: "Eco Park 15",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.5236,
          lng: 23.8496,
        },
      },
      sizeHectares: 3860,
      established: 1984,
      biodiversity: {
        speciesCount: 1103,
        protectedSpecies: 19,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 31,
        bikeRoutesKm: 29,
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 9.5,
      },
      entryFee: 0,
      ratings: {
        average: 0.2,
        reviews: 575,
      },
      tags: ["nature"],
    },
    {
      id: 16,
      name: "Eco Park 16",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9309,
          lng: 23.9431,
        },
      },
      sizeHectares: 2004,
      established: 1985,
      biodiversity: {
        speciesCount: 722,
        protectedSpecies: 49,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 108,
        bikeRoutesKm: 12,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 9,
      },
      lakes: [
        {
          name: "Lake 16-1",
          areaHa: 53,
          swimmable: true,
        },
        {
          name: "Lake 16-2",
          areaHa: 42,
          swimmable: false,
        },
        {
          name: "Lake 16-3",
          areaHa: 45,
          swimmable: false,
        },
      ],
      entryFee: 4.12,
      ratings: {
        average: 0.9,
        reviews: 2275,
      },
      tags: ["wildlife", "photography"],
    },
    {
      id: 17,
      name: "Eco Park 17",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.5639,
          lng: 23.1737,
        },
      },
      sizeHectares: 4645,
      established: 1986,
      biodiversity: {
        speciesCount: 46,
        protectedSpecies: 52,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 27,
        bikeRoutesKm: 50,
      },
      entryFee: 0,
      ratings: {
        average: 0.5,
        reviews: 2983,
      },
      tags: ["nature", "hiking", "family"],
    },
    {
      id: 18,
      name: "Eco Park 18",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3268,
          lng: 23.3884,
        },
      },
      sizeHectares: 2611,
      established: 1987,
      biodiversity: {
        speciesCount: 884,
        protectedSpecies: 15,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 2,
        bikeRoutesKm: 34,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate"],
        },
      },
      entryFee: 5.4,
      ratings: {
        average: 1.3,
        reviews: 3766,
      },
      tags: ["nature", "family", "wildlife", "photography"],
    },
    {
      id: 19,
      name: "Eco Park 19",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9567,
          lng: 23.5076,
        },
      },
      sizeHectares: 1993,
      established: 1988,
      biodiversity: {
        speciesCount: 842,
        protectedSpecies: 67,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 107,
        bikeRoutesKm: 53,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      entryFee: 8.02,
      ratings: {
        average: 2.5,
        reviews: 1300,
      },
      tags: ["nature", "hiking", "wildlife"],
    },
    {
      id: 20,
      name: "Eco Park 20",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3277,
          lng: 23.6288,
        },
      },
      sizeHectares: 5168,
      established: 1989,
      biodiversity: {
        speciesCount: 68,
        protectedSpecies: 13,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 19,
        bikeRoutesKm: 42,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 2.5,
        reviews: 1343,
      },
      tags: ["nature", "family", "wildlife"],
    },
    {
      id: 21,
      name: "Eco Park 21",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1093,
          lng: 23.5896,
        },
      },
      sizeHectares: 1646,
      established: 1990,
      biodiversity: {
        speciesCount: 282,
        protectedSpecies: 49,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 5,
        bikeRoutesKm: 61,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      transport: {
        busRoutes: 3,
        nearestStationKm: 1.8,
      },
      entryFee: 2.67,
      ratings: {
        average: 2.6,
        reviews: 37,
      },
      tags: ["family", "wildlife"],
    },
    {
      id: 22,
      name: "Eco Park 22",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.5416,
          lng: 23.9578,
        },
      },
      sizeHectares: 4952,
      established: 1991,
      biodiversity: {
        speciesCount: 205,
        protectedSpecies: 39,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 69,
        bikeRoutesKm: 53,
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 14.2,
      },
      entryFee: 0,
      ratings: {
        average: 0.9,
        reviews: 2331,
      },
      tags: ["nature", "hiking"],
    },
    {
      id: 23,
      name: "Eco Park 23",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.0296,
          lng: 23.8894,
        },
      },
      sizeHectares: 2434,
      established: 1992,
      biodiversity: {
        speciesCount: 332,
        protectedSpecies: 39,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 115,
        bikeRoutesKm: 40,
      },
      entryFee: 8.2,
      ratings: {
        average: 2.4,
        reviews: 3022,
      },
      tags: ["nature", "hiking"],
    },
    {
      id: 24,
      name: "Eco Park 24",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.8903,
          lng: 23.3372,
        },
      },
      sizeHectares: 2535,
      established: 1993,
      biodiversity: {
        speciesCount: 525,
        protectedSpecies: 26,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 39,
        bikeRoutesKm: 13,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 3,
        nearestStationKm: 3.4,
      },
      entryFee: 7.71,
      ratings: {
        average: 3.1,
        reviews: 2009,
      },
      tags: ["hiking", "wildlife", "photography"],
    },
    {
      id: 25,
      name: "Eco Park 25",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1619,
          lng: 23.4335,
        },
      },
      sizeHectares: 2394,
      established: 1994,
      biodiversity: {
        speciesCount: 898,
        protectedSpecies: 58,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 21,
        bikeRoutesKm: 61,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 3,
        nearestStationKm: 7.8,
      },
      entryFee: 0,
      ratings: {
        average: 5,
        reviews: 4511,
      },
      tags: ["family", "photography"],
    },
    {
      id: 26,
      name: "Eco Park 26",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.8448,
          lng: 23.6399,
        },
      },
      sizeHectares: 4054,
      established: 1995,
      biodiversity: {
        speciesCount: 889,
        protectedSpecies: 12,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 7,
        bikeRoutesKm: 1,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 3.2,
      },
      entryFee: 0,
      ratings: {
        average: 3.6,
        reviews: 15,
      },
      tags: ["nature", "hiking", "family", "photography"],
    },
    {
      id: 27,
      name: "Eco Park 27",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.2533,
          lng: 23.6308,
        },
      },
      sizeHectares: 3518,
      established: 1996,
      biodiversity: {
        speciesCount: 229,
        protectedSpecies: 37,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 52,
        bikeRoutesKm: 69,
      },
      transport: {
        busRoutes: 3,
        nearestStationKm: 4.3,
      },
      lakes: [
        {
          name: "Lake 27-1",
          areaHa: 44,
          swimmable: false,
        },
        {
          name: "Lake 27-2",
          areaHa: 49,
          swimmable: true,
        },
      ],
      entryFee: 8.53,
      ratings: {
        average: 2,
        reviews: 2339,
      },
      tags: ["nature", "hiking", "family", "photography"],
    },
    {
      id: 28,
      name: "Eco Park 28",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.8308,
          lng: 23.5629,
        },
      },
      sizeHectares: 836,
      established: 1997,
      biodiversity: {
        speciesCount: 789,
        protectedSpecies: 29,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 9,
        bikeRoutesKm: 25,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 5.8,
      },
      entryFee: 8.56,
      ratings: {
        average: 4.5,
        reviews: 3992,
      },
      tags: ["nature", "wildlife", "photography"],
    },
    {
      id: 29,
      name: "Eco Park 29",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.2625,
          lng: 23.1378,
        },
      },
      sizeHectares: 1785,
      established: 1998,
      biodiversity: {
        speciesCount: 888,
        protectedSpecies: 19,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 72,
        bikeRoutesKm: 61,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      lakes: [
        {
          name: "Lake 29-1",
          areaHa: 23,
          swimmable: true,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 1.9,
        reviews: 1384,
      },
      tags: ["hiking", "family", "wildlife"],
    },
    {
      id: 30,
      name: "Eco Park 30",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.189,
          lng: 23.6007,
        },
      },
      sizeHectares: 4424,
      established: 1999,
      biodiversity: {
        speciesCount: 53,
        protectedSpecies: 55,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 100,
        bikeRoutesKm: 32,
      },
      lakes: [
        {
          name: "Lake 30-1",
          areaHa: 30,
          swimmable: true,
        },
        {
          name: "Lake 30-2",
          areaHa: 5,
          swimmable: false,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 0.4,
        reviews: 1210,
      },
      tags: ["hiking", "family", "wildlife", "photography"],
    },
    {
      id: 31,
      name: "Eco Park 31",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1721,
          lng: 23.4714,
        },
      },
      sizeHectares: 434,
      established: 2000,
      biodiversity: {
        speciesCount: 770,
        protectedSpecies: 43,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 80,
        bikeRoutesKm: 23,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 5.7,
      },
      entryFee: 2.62,
      ratings: {
        average: 3.1,
        reviews: 1978,
      },
      tags: ["nature", "hiking", "wildlife"],
    },
    {
      id: 32,
      name: "Eco Park 32",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.6053,
          lng: 23.7761,
        },
      },
      sizeHectares: 3251,
      established: 2001,
      biodiversity: {
        speciesCount: 1111,
        protectedSpecies: 71,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 63,
        bikeRoutesKm: 42,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 4.1,
      },
      entryFee: 0.62,
      ratings: {
        average: 4.7,
        reviews: 1416,
      },
      tags: ["hiking", "family"],
    },
    {
      id: 33,
      name: "Eco Park 33",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.336,
          lng: 23.515,
        },
      },
      sizeHectares: 3547,
      established: 2002,
      biodiversity: {
        speciesCount: 580,
        protectedSpecies: 39,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 61,
        bikeRoutesKm: 4,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 4.1,
        reviews: 3442,
      },
      tags: ["nature", "wildlife", "photography"],
    },
    {
      id: 34,
      name: "Eco Park 34",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3144,
          lng: 23.4422,
        },
      },
      sizeHectares: 2569,
      established: 2003,
      biodiversity: {
        speciesCount: 836,
        protectedSpecies: 76,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 67,
        bikeRoutesKm: 76,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 2,
        nearestStationKm: 4.8,
      },
      lakes: [
        {
          name: "Lake 34-1",
          areaHa: 15,
          swimmable: false,
        },
        {
          name: "Lake 34-2",
          areaHa: 29,
          swimmable: false,
        },
        {
          name: "Lake 34-3",
          areaHa: 48,
          swimmable: true,
        },
      ],
      entryFee: 3.36,
      ratings: {
        average: 3.7,
        reviews: 2933,
      },
      tags: ["nature", "hiking", "family", "wildlife"],
    },
    {
      id: 35,
      name: "Eco Park 35",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.2204,
          lng: 23.6762,
        },
      },
      sizeHectares: 1532,
      established: 2004,
      biodiversity: {
        speciesCount: 893,
        protectedSpecies: 22,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 24,
        bikeRoutesKm: 23,
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 13.7,
      },
      entryFee: 0,
      ratings: {
        average: 4.3,
        reviews: 2792,
      },
      tags: ["nature", "family", "wildlife", "photography"],
    },
    {
      id: 36,
      name: "Eco Park 36",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.6587,
          lng: 23.1687,
        },
      },
      sizeHectares: 289,
      established: 2005,
      biodiversity: {
        speciesCount: 43,
        protectedSpecies: 56,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 108,
        bikeRoutesKm: 21,
      },
      transport: {
        busRoutes: 2,
        nearestStationKm: 8.1,
      },
      lakes: [
        {
          name: "Lake 36-1",
          areaHa: 38,
          swimmable: false,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 3.8,
        reviews: 2336,
      },
      tags: ["nature", "hiking", "family", "wildlife", "photography"],
    },
    {
      id: 37,
      name: "Eco Park 37",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.6375,
          lng: 23.3022,
        },
      },
      sizeHectares: 898,
      established: 2006,
      biodiversity: {
        speciesCount: 1139,
        protectedSpecies: 36,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 24,
        bikeRoutesKm: 63,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 6.8,
      },
      lakes: [
        {
          name: "Lake 37-1",
          areaHa: 6,
          swimmable: false,
        },
        {
          name: "Lake 37-2",
          areaHa: 46,
          swimmable: true,
        },
        {
          name: "Lake 37-3",
          areaHa: 11,
          swimmable: true,
        },
      ],
      entryFee: 9.69,
      ratings: {
        average: 4.3,
        reviews: 1932,
      },
      tags: ["hiking", "family", "wildlife", "photography"],
    },
    {
      id: 38,
      name: "Eco Park 38",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.5295,
          lng: 23.4359,
        },
      },
      sizeHectares: 3529,
      established: 2007,
      biodiversity: {
        speciesCount: 178,
        protectedSpecies: 74,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 18,
        bikeRoutesKm: 45,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 3,
      },
      lakes: [
        {
          name: "Lake 38-1",
          areaHa: 21,
          swimmable: true,
        },
        {
          name: "Lake 38-2",
          areaHa: 47,
          swimmable: true,
        },
        {
          name: "Lake 38-3",
          areaHa: 10,
          swimmable: true,
        },
      ],
      entryFee: 5.05,
      ratings: {
        average: 3.6,
        reviews: 316,
      },
      tags: ["nature", "family"],
    },
    {
      id: 39,
      name: "Eco Park 39",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1192,
          lng: 23.766,
        },
      },
      sizeHectares: 3226,
      established: 2008,
      biodiversity: {
        speciesCount: 1054,
        protectedSpecies: 78,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 17,
        bikeRoutesKm: 73,
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 15,
      },
      lakes: [
        {
          name: "Lake 39-1",
          areaHa: 41,
          swimmable: true,
        },
        {
          name: "Lake 39-2",
          areaHa: 19,
          swimmable: false,
        },
      ],
      entryFee: 8.9,
      ratings: {
        average: 4.6,
        reviews: 3341,
      },
      tags: ["nature", "hiking", "wildlife"],
    },
    {
      id: 40,
      name: "Eco Park 40",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3698,
          lng: 23.1505,
        },
      },
      sizeHectares: 694,
      established: 2009,
      biodiversity: {
        speciesCount: 257,
        protectedSpecies: 2,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 39,
        bikeRoutesKm: 62,
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 3.9,
      },
      lakes: [
        {
          name: "Lake 40-1",
          areaHa: 34,
          swimmable: true,
        },
        {
          name: "Lake 40-2",
          areaHa: 6,
          swimmable: true,
        },
      ],
      entryFee: 9.12,
      ratings: {
        average: 3.1,
        reviews: 1108,
      },
      tags: ["hiking", "family", "wildlife"],
    },
    {
      id: 41,
      name: "Eco Park 41",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.0591,
          lng: 23.6769,
        },
      },
      sizeHectares: 2687,
      established: 2010,
      biodiversity: {
        speciesCount: 976,
        protectedSpecies: 39,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 16,
        bikeRoutesKm: 46,
      },
      entryFee: 0,
      ratings: {
        average: 2.6,
        reviews: 2722,
      },
      tags: ["nature", "hiking", "family", "wildlife", "photography"],
    },
    {
      id: 42,
      name: "Eco Park 42",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.5673,
          lng: 23.1999,
        },
      },
      sizeHectares: 1531,
      established: 2011,
      biodiversity: {
        speciesCount: 927,
        protectedSpecies: 14,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 59,
        bikeRoutesKm: 68,
      },
      lakes: [
        {
          name: "Lake 42-1",
          areaHa: 35,
          swimmable: false,
        },
        {
          name: "Lake 42-2",
          areaHa: 30,
          swimmable: false,
        },
        {
          name: "Lake 42-3",
          areaHa: 24,
          swimmable: false,
        },
      ],
      entryFee: 5.27,
      ratings: {
        average: 4.9,
        reviews: 4889,
      },
      tags: ["nature", "hiking", "family", "photography"],
    },
    {
      id: 43,
      name: "Eco Park 43",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1422,
          lng: 23.5917,
        },
      },
      sizeHectares: 739,
      established: 2012,
      biodiversity: {
        speciesCount: 939,
        protectedSpecies: 15,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 59,
        bikeRoutesKm: 58,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      lakes: [
        {
          name: "Lake 43-1",
          areaHa: 25,
          swimmable: false,
        },
        {
          name: "Lake 43-2",
          areaHa: 41,
          swimmable: false,
        },
        {
          name: "Lake 43-3",
          areaHa: 52,
          swimmable: false,
        },
      ],
      entryFee: 5.62,
      ratings: {
        average: 4.9,
        reviews: 636,
      },
      tags: ["nature", "hiking"],
    },
    {
      id: 44,
      name: "Eco Park 44",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9998,
          lng: 23.706,
        },
      },
      sizeHectares: 377,
      established: 2013,
      biodiversity: {
        speciesCount: 307,
        protectedSpecies: 72,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 7,
        bikeRoutesKm: 74,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 0.8,
      },
      entryFee: 0,
      ratings: {
        average: 1,
        reviews: 4005,
      },
      tags: ["hiking", "family", "wildlife", "photography"],
    },
    {
      id: 45,
      name: "Eco Park 45",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.7647,
          lng: 23.6188,
        },
      },
      sizeHectares: 3002,
      established: 2014,
      biodiversity: {
        speciesCount: 258,
        protectedSpecies: 52,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 21,
        bikeRoutesKm: 16,
      },
      lakes: [
        {
          name: "Lake 45-1",
          areaHa: 48,
          swimmable: false,
        },
        {
          name: "Lake 45-2",
          areaHa: 32,
          swimmable: false,
        },
      ],
      entryFee: 7.68,
      ratings: {
        average: 3.6,
        reviews: 2043,
      },
      tags: ["family", "wildlife", "photography"],
    },
    {
      id: 46,
      name: "Eco Park 46",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3257,
          lng: 23.5998,
        },
      },
      sizeHectares: 1465,
      established: 2015,
      biodiversity: {
        speciesCount: 467,
        protectedSpecies: 2,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 4,
        bikeRoutesKm: 73,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 1.3,
        reviews: 4788,
      },
      tags: ["wildlife", "photography"],
    },
    {
      id: 47,
      name: "Eco Park 47",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1252,
          lng: 23.1003,
        },
      },
      sizeHectares: 1296,
      established: 2016,
      biodiversity: {
        speciesCount: 1019,
        protectedSpecies: 35,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 65,
        bikeRoutesKm: 51,
      },
      lakes: [
        {
          name: "Lake 47-1",
          areaHa: 18,
          swimmable: false,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 3.2,
        reviews: 1485,
      },
      tags: ["nature", "hiking", "photography"],
    },
    {
      id: 48,
      name: "Eco Park 48",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.7647,
          lng: 23.887,
        },
      },
      sizeHectares: 3525,
      established: 2017,
      biodiversity: {
        speciesCount: 825,
        protectedSpecies: 63,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 5,
        bikeRoutesKm: 61,
      },
      lakes: [
        {
          name: "Lake 48-1",
          areaHa: 47,
          swimmable: true,
        },
        {
          name: "Lake 48-2",
          areaHa: 17,
          swimmable: false,
        },
        {
          name: "Lake 48-3",
          areaHa: 45,
          swimmable: true,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 4.8,
        reviews: 544,
      },
      tags: ["nature", "hiking"],
    },
    {
      id: 49,
      name: "Eco Park 49",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.0776,
          lng: 23.0419,
        },
      },
      sizeHectares: 3795,
      established: 2018,
      biodiversity: {
        speciesCount: 155,
        protectedSpecies: 35,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 95,
        bikeRoutesKm: 50,
      },
      entryFee: 0,
      ratings: {
        average: 1.9,
        reviews: 2722,
      },
      tags: ["nature", "hiking", "wildlife"],
    },
    {
      id: 50,
      name: "Eco Park 50",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9279,
          lng: 23.2753,
        },
      },
      sizeHectares: 2028,
      established: 2019,
      biodiversity: {
        speciesCount: 1046,
        protectedSpecies: 37,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 35,
        bikeRoutesKm: 45,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 2,
        nearestStationKm: 1.4,
      },
      entryFee: 0,
      ratings: {
        average: 1,
        reviews: 4257,
      },
      tags: ["nature", "hiking", "family"],
    },
    {
      id: 51,
      name: "Eco Park 51",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.2316,
          lng: 23.0824,
        },
      },
      sizeHectares: 3325,
      established: 1970,
      biodiversity: {
        speciesCount: 1013,
        protectedSpecies: 62,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 69,
        bikeRoutesKm: 62,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate"],
        },
      },
      entryFee: 7,
      ratings: {
        average: 1.3,
        reviews: 730,
      },
      tags: ["nature", "hiking", "wildlife"],
    },
    {
      id: 52,
      name: "Eco Park 52",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.6859,
          lng: 23.5859,
        },
      },
      sizeHectares: 4714,
      established: 1971,
      biodiversity: {
        speciesCount: 94,
        protectedSpecies: 22,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 115,
        bikeRoutesKm: 66,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 2.2,
        reviews: 2663,
      },
      tags: ["nature", "hiking"],
    },
    {
      id: 53,
      name: "Eco Park 53",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3967,
          lng: 23.9825,
        },
      },
      sizeHectares: 1317,
      established: 1972,
      biodiversity: {
        speciesCount: 948,
        protectedSpecies: 44,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 37,
        bikeRoutesKm: 55,
      },
      lakes: [
        {
          name: "Lake 53-1",
          areaHa: 54,
          swimmable: true,
        },
        {
          name: "Lake 53-2",
          areaHa: 46,
          swimmable: true,
        },
        {
          name: "Lake 53-3",
          areaHa: 54,
          swimmable: false,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 1.1,
        reviews: 70,
      },
      tags: ["nature", "hiking", "family", "wildlife"],
    },
    {
      id: 54,
      name: "Eco Park 54",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.808,
          lng: 23.327,
        },
      },
      sizeHectares: 4212,
      established: 1973,
      biodiversity: {
        speciesCount: 183,
        protectedSpecies: 55,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 29,
        bikeRoutesKm: 51,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife"],
        },
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 8,
      },
      lakes: [
        {
          name: "Lake 54-1",
          areaHa: 51,
          swimmable: true,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 1.1,
        reviews: 4890,
      },
      tags: ["nature", "hiking", "family", "photography"],
    },
    {
      id: 55,
      name: "Eco Park 55",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.6634,
          lng: 23.5587,
        },
      },
      sizeHectares: 1435,
      established: 1974,
      biodiversity: {
        speciesCount: 192,
        protectedSpecies: 76,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 67,
        bikeRoutesKm: 38,
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 12.3,
      },
      lakes: [
        {
          name: "Lake 55-1",
          areaHa: 29,
          swimmable: true,
        },
        {
          name: "Lake 55-2",
          areaHa: 44,
          swimmable: true,
        },
        {
          name: "Lake 55-3",
          areaHa: 53,
          swimmable: false,
        },
      ],
      entryFee: 8.96,
      ratings: {
        average: 0.2,
        reviews: 4506,
      },
      tags: ["nature", "wildlife", "photography"],
    },
    {
      id: 56,
      name: "Eco Park 56",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9344,
          lng: 23.3487,
        },
      },
      sizeHectares: 646,
      established: 1975,
      biodiversity: {
        speciesCount: 634,
        protectedSpecies: 46,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 51,
        bikeRoutesKm: 74,
      },
      transport: {
        busRoutes: 2,
        nearestStationKm: 11,
      },
      entryFee: 6.13,
      ratings: {
        average: 2.7,
        reviews: 2949,
      },
      tags: ["hiking", "family", "wildlife", "photography"],
    },
    {
      id: 57,
      name: "Eco Park 57",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9674,
          lng: 23.6065,
        },
      },
      sizeHectares: 3480,
      established: 1976,
      biodiversity: {
        speciesCount: 1091,
        protectedSpecies: 52,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 118,
        bikeRoutesKm: 42,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 2,
        nearestStationKm: 2.2,
      },
      lakes: [
        {
          name: "Lake 57-1",
          areaHa: 20,
          swimmable: true,
        },
        {
          name: "Lake 57-2",
          areaHa: 28,
          swimmable: true,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 4.1,
        reviews: 1729,
      },
      tags: ["nature", "hiking", "family", "wildlife"],
    },
    {
      id: 58,
      name: "Eco Park 58",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.6722,
          lng: 23.4168,
        },
      },
      sizeHectares: 4458,
      established: 1977,
      biodiversity: {
        speciesCount: 348,
        protectedSpecies: 61,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 41,
        bikeRoutesKm: 22,
      },
      entryFee: 0.83,
      ratings: {
        average: 1.9,
        reviews: 2343,
      },
      tags: ["hiking", "family", "wildlife"],
    },
    {
      id: 59,
      name: "Eco Park 59",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.5821,
          lng: 23.7364,
        },
      },
      sizeHectares: 2215,
      established: 1978,
      biodiversity: {
        speciesCount: 784,
        protectedSpecies: 58,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 96,
        bikeRoutesKm: 38,
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 12.5,
      },
      entryFee: 0,
      ratings: {
        average: 4,
        reviews: 828,
      },
      tags: ["hiking", "family", "wildlife"],
    },
    {
      id: 60,
      name: "Eco Park 60",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1065,
          lng: 23.6879,
        },
      },
      sizeHectares: 3207,
      established: 1979,
      biodiversity: {
        speciesCount: 130,
        protectedSpecies: 30,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 117,
        bikeRoutesKm: 52,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 2,
        nearestStationKm: 14,
      },
      entryFee: 3.82,
      ratings: {
        average: 0.8,
        reviews: 181,
      },
      tags: ["nature", "hiking", "family", "wildlife", "photography"],
    },
    {
      id: 61,
      name: "Eco Park 61",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.8403,
          lng: 23.5916,
        },
      },
      sizeHectares: 4592,
      established: 1980,
      biodiversity: {
        speciesCount: 702,
        protectedSpecies: 35,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 42,
        bikeRoutesKm: 32,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 5.8,
      },
      entryFee: 7.21,
      ratings: {
        average: 2.4,
        reviews: 4111,
      },
      tags: ["nature", "hiking", "family", "wildlife", "photography"],
    },
    {
      id: 62,
      name: "Eco Park 62",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3393,
          lng: 23.7431,
        },
      },
      sizeHectares: 950,
      established: 1981,
      biodiversity: {
        speciesCount: 976,
        protectedSpecies: 72,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 19,
        bikeRoutesKm: 61,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate"],
        },
      },
      lakes: [
        {
          name: "Lake 62-1",
          areaHa: 13,
          swimmable: false,
        },
        {
          name: "Lake 62-2",
          areaHa: 46,
          swimmable: true,
        },
      ],
      entryFee: 5.26,
      ratings: {
        average: 0.7,
        reviews: 1565,
      },
      tags: ["nature", "hiking"],
    },
    {
      id: 63,
      name: "Eco Park 63",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.5867,
          lng: 23.7185,
        },
      },
      sizeHectares: 4154,
      established: 1982,
      biodiversity: {
        speciesCount: 966,
        protectedSpecies: 20,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 43,
        bikeRoutesKm: 57,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      entryFee: 7.21,
      ratings: {
        average: 0.8,
        reviews: 1751,
      },
      tags: ["nature", "hiking", "wildlife", "photography"],
    },
    {
      id: 64,
      name: "Eco Park 64",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.2658,
          lng: 23.5975,
        },
      },
      sizeHectares: 2869,
      established: 1983,
      biodiversity: {
        speciesCount: 705,
        protectedSpecies: 50,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 111,
        bikeRoutesKm: 9,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate"],
        },
      },
      lakes: [
        {
          name: "Lake 64-1",
          areaHa: 29,
          swimmable: false,
        },
        {
          name: "Lake 64-2",
          areaHa: 6,
          swimmable: true,
        },
        {
          name: "Lake 64-3",
          areaHa: 7,
          swimmable: true,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 1.8,
        reviews: 4700,
      },
      tags: ["hiking", "family"],
    },
    {
      id: 65,
      name: "Eco Park 65",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.6982,
          lng: 23.3071,
        },
      },
      sizeHectares: 3478,
      established: 1984,
      biodiversity: {
        speciesCount: 587,
        protectedSpecies: 4,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 35,
        bikeRoutesKm: 74,
      },
      transport: {
        busRoutes: 2,
        nearestStationKm: 5,
      },
      entryFee: 5.74,
      ratings: {
        average: 1.4,
        reviews: 3223,
      },
      tags: ["nature", "family", "wildlife", "photography"],
    },
    {
      id: 66,
      name: "Eco Park 66",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.5382,
          lng: 23.5183,
        },
      },
      sizeHectares: 4320,
      established: 1985,
      biodiversity: {
        speciesCount: 673,
        protectedSpecies: 29,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 51,
        bikeRoutesKm: 9,
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 12,
      },
      entryFee: 5.06,
      ratings: {
        average: 1.5,
        reviews: 932,
      },
      tags: ["hiking", "wildlife", "photography"],
    },
    {
      id: 67,
      name: "Eco Park 67",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.2797,
          lng: 23.9643,
        },
      },
      sizeHectares: 3340,
      established: 1986,
      biodiversity: {
        speciesCount: 534,
        protectedSpecies: 4,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 28,
        bikeRoutesKm: 27,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      entryFee: 9.76,
      ratings: {
        average: 4,
        reviews: 4417,
      },
      tags: ["hiking", "family", "photography"],
    },
    {
      id: 68,
      name: "Eco Park 68",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.0202,
          lng: 23.6396,
        },
      },
      sizeHectares: 2001,
      established: 1987,
      biodiversity: {
        speciesCount: 1072,
        protectedSpecies: 55,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 95,
        bikeRoutesKm: 71,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 12.3,
      },
      lakes: [
        {
          name: "Lake 68-1",
          areaHa: 23,
          swimmable: false,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 4.8,
        reviews: 2398,
      },
      tags: ["hiking", "family", "wildlife", "photography"],
    },
    {
      id: 69,
      name: "Eco Park 69",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1081,
          lng: 23.3038,
        },
      },
      sizeHectares: 4495,
      established: 1988,
      biodiversity: {
        speciesCount: 790,
        protectedSpecies: 46,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 22,
        bikeRoutesKm: 15,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 5.8,
      },
      entryFee: 0,
      ratings: {
        average: 0.2,
        reviews: 1059,
      },
      tags: ["photography"],
    },
    {
      id: 70,
      name: "Eco Park 70",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9639,
          lng: 23.9866,
        },
      },
      sizeHectares: 1270,
      established: 1989,
      biodiversity: {
        speciesCount: 660,
        protectedSpecies: 29,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 11,
        bikeRoutesKm: 34,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 1.9,
        reviews: 4252,
      },
      tags: ["hiking"],
    },
    {
      id: 71,
      name: "Eco Park 71",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9284,
          lng: 23.9524,
        },
      },
      sizeHectares: 1003,
      established: 1990,
      biodiversity: {
        speciesCount: 990,
        protectedSpecies: 76,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 104,
        bikeRoutesKm: 16,
      },
      entryFee: 7.66,
      ratings: {
        average: 3.2,
        reviews: 576,
      },
      tags: ["hiking", "wildlife"],
    },
    {
      id: 72,
      name: "Eco Park 72",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.2382,
          lng: 23.959,
        },
      },
      sizeHectares: 4087,
      established: 1991,
      biodiversity: {
        speciesCount: 599,
        protectedSpecies: 13,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 24,
        bikeRoutesKm: 40,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 2.4,
        reviews: 1453,
      },
      tags: ["wildlife"],
    },
    {
      id: 73,
      name: "Eco Park 73",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.405,
          lng: 23.9467,
        },
      },
      sizeHectares: 2298,
      established: 1992,
      biodiversity: {
        speciesCount: 459,
        protectedSpecies: 18,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 60,
        bikeRoutesKm: 38,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 14.8,
      },
      entryFee: 4.13,
      ratings: {
        average: 2.3,
        reviews: 4048,
      },
      tags: ["nature", "hiking", "family", "wildlife"],
    },
    {
      id: 74,
      name: "Eco Park 74",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.4686,
          lng: 23.858,
        },
      },
      sizeHectares: 5160,
      established: 1993,
      biodiversity: {
        speciesCount: 336,
        protectedSpecies: 27,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 4,
        bikeRoutesKm: 75,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      lakes: [
        {
          name: "Lake 74-1",
          areaHa: 34,
          swimmable: true,
        },
      ],
      entryFee: 6.1,
      ratings: {
        average: 2.4,
        reviews: 1512,
      },
      tags: ["nature", "hiking", "family", "wildlife", "photography"],
    },
    {
      id: 75,
      name: "Eco Park 75",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.2055,
          lng: 23.5551,
        },
      },
      sizeHectares: 1788,
      established: 1994,
      biodiversity: {
        speciesCount: 310,
        protectedSpecies: 16,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 20,
        bikeRoutesKm: 54,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      lakes: [
        {
          name: "Lake 75-1",
          areaHa: 31,
          swimmable: true,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 4.8,
        reviews: 1294,
      },
      tags: ["nature", "hiking", "photography"],
    },
    {
      id: 76,
      name: "Eco Park 76",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9649,
          lng: 23.043,
        },
      },
      sizeHectares: 3266,
      established: 1995,
      biodiversity: {
        speciesCount: 1026,
        protectedSpecies: 60,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 62,
        bikeRoutesKm: 68,
      },
      entryFee: 0,
      ratings: {
        average: 3.4,
        reviews: 3007,
      },
      tags: ["nature", "hiking", "family", "photography"],
    },
    {
      id: 77,
      name: "Eco Park 77",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9945,
          lng: 23.4089,
        },
      },
      sizeHectares: 3993,
      established: 1996,
      biodiversity: {
        speciesCount: 942,
        protectedSpecies: 67,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 103,
        bikeRoutesKm: 45,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 5.7,
      },
      entryFee: 0,
      ratings: {
        average: 0.1,
        reviews: 4511,
      },
      tags: ["nature", "family", "photography"],
    },
    {
      id: 78,
      name: "Eco Park 78",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.153,
          lng: 23.0063,
        },
      },
      sizeHectares: 1480,
      established: 1997,
      biodiversity: {
        speciesCount: 467,
        protectedSpecies: 73,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 109,
        bikeRoutesKm: 63,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 3,
        nearestStationKm: 13.8,
      },
      entryFee: 6.22,
      ratings: {
        average: 0.6,
        reviews: 4718,
      },
      tags: ["hiking", "photography"],
    },
    {
      id: 79,
      name: "Eco Park 79",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.8074,
          lng: 23.8174,
        },
      },
      sizeHectares: 4754,
      established: 1998,
      biodiversity: {
        speciesCount: 602,
        protectedSpecies: 71,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 32,
        bikeRoutesKm: 4,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 0.1,
      },
      lakes: [
        {
          name: "Lake 79-1",
          areaHa: 30,
          swimmable: false,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 3.5,
        reviews: 675,
      },
      tags: ["hiking", "family", "wildlife"],
    },
    {
      id: 80,
      name: "Eco Park 80",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.4294,
          lng: 23.007,
        },
      },
      sizeHectares: 3788,
      established: 1999,
      biodiversity: {
        speciesCount: 938,
        protectedSpecies: 31,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 55,
        bikeRoutesKm: 37,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 8.6,
      },
      lakes: [
        {
          name: "Lake 80-1",
          areaHa: 48,
          swimmable: true,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 0.7,
        reviews: 1778,
      },
      tags: ["nature", "hiking", "family"],
    },
    {
      id: 81,
      name: "Eco Park 81",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.8831,
          lng: 23.5122,
        },
      },
      sizeHectares: 1285,
      established: 2000,
      biodiversity: {
        speciesCount: 412,
        protectedSpecies: 67,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 4,
        bikeRoutesKm: 3,
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 8.1,
      },
      entryFee: 0,
      ratings: {
        average: 4.3,
        reviews: 3472,
      },
      tags: ["nature", "hiking", "family", "wildlife"],
    },
    {
      id: 82,
      name: "Eco Park 82",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.8929,
          lng: 23.1584,
        },
      },
      sizeHectares: 3306,
      established: 2001,
      biodiversity: {
        speciesCount: 668,
        protectedSpecies: 6,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 40,
        bikeRoutesKm: 35,
      },
      transport: {
        busRoutes: 3,
        nearestStationKm: 1.9,
      },
      entryFee: 6.94,
      ratings: {
        average: 1.2,
        reviews: 1890,
      },
      tags: ["nature", "hiking", "photography"],
    },
    {
      id: 83,
      name: "Eco Park 83",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.698,
          lng: 23.8017,
        },
      },
      sizeHectares: 990,
      established: 2002,
      biodiversity: {
        speciesCount: 228,
        protectedSpecies: 30,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 99,
        bikeRoutesKm: 66,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      lakes: [
        {
          name: "Lake 83-1",
          areaHa: 37,
          swimmable: false,
        },
        {
          name: "Lake 83-2",
          areaHa: 41,
          swimmable: true,
        },
        {
          name: "Lake 83-3",
          areaHa: 52,
          swimmable: false,
        },
      ],
      entryFee: 5.19,
      ratings: {
        average: 4.5,
        reviews: 3437,
      },
      tags: ["nature", "hiking"],
    },
    {
      id: 84,
      name: "Eco Park 84",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9324,
          lng: 23.4445,
        },
      },
      sizeHectares: 4842,
      established: 2003,
      biodiversity: {
        speciesCount: 1060,
        protectedSpecies: 32,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 36,
        bikeRoutesKm: 72,
      },
      entryFee: 0.85,
      ratings: {
        average: 1.3,
        reviews: 3375,
      },
      tags: ["hiking", "family", "wildlife", "photography"],
    },
    {
      id: 85,
      name: "Eco Park 85",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.0624,
          lng: 23.2273,
        },
      },
      sizeHectares: 2381,
      established: 2004,
      biodiversity: {
        speciesCount: 1081,
        protectedSpecies: 55,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 86,
        bikeRoutesKm: 30,
      },
      transport: {
        busRoutes: 1,
        nearestStationKm: 10.5,
      },
      entryFee: 0,
      ratings: {
        average: 4.9,
        reviews: 826,
      },
      tags: ["wildlife", "photography"],
    },
    {
      id: 86,
      name: "Eco Park 86",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.274,
          lng: 23.6913,
        },
      },
      sizeHectares: 1115,
      established: 2005,
      biodiversity: {
        speciesCount: 660,
        protectedSpecies: 74,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 77,
        bikeRoutesKm: 75,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 5,
        nearestStationKm: 1.7,
      },
      entryFee: 1.17,
      ratings: {
        average: 2.3,
        reviews: 2037,
      },
      tags: ["nature", "wildlife"],
    },
    {
      id: 87,
      name: "Eco Park 87",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.1637,
          lng: 23.768,
        },
      },
      sizeHectares: 4893,
      established: 2006,
      biodiversity: {
        speciesCount: 150,
        protectedSpecies: 42,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 48,
        bikeRoutesKm: 72,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 3,
        reviews: 4639,
      },
      tags: ["nature", "hiking"],
    },
    {
      id: 88,
      name: "Eco Park 88",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.8642,
          lng: 23.3544,
        },
      },
      sizeHectares: 3716,
      established: 2007,
      biodiversity: {
        speciesCount: 83,
        protectedSpecies: 54,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 26,
        bikeRoutesKm: 69,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      entryFee: 4.91,
      ratings: {
        average: 2.1,
        reviews: 744,
      },
      tags: ["nature", "hiking", "photography"],
    },
    {
      id: 89,
      name: "Eco Park 89",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.208,
          lng: 23.0296,
        },
      },
      sizeHectares: 2368,
      established: 2008,
      biodiversity: {
        speciesCount: 783,
        protectedSpecies: 57,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 51,
        bikeRoutesKm: 33,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate"],
        },
      },
      lakes: [
        {
          name: "Lake 89-1",
          areaHa: 38,
          swimmable: true,
        },
        {
          name: "Lake 89-2",
          areaHa: 50,
          swimmable: false,
        },
      ],
      entryFee: 8.81,
      ratings: {
        average: 2.8,
        reviews: 4558,
      },
      tags: ["hiking", "family", "wildlife"],
    },
    {
      id: 90,
      name: "Eco Park 90",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.0225,
          lng: 23.2111,
        },
      },
      sizeHectares: 881,
      established: 2009,
      biodiversity: {
        speciesCount: 811,
        protectedSpecies: 10,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 72,
        bikeRoutesKm: 30,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 1.9,
        reviews: 2705,
      },
      tags: ["nature", "wildlife", "photography"],
    },
    {
      id: 91,
      name: "Eco Park 91",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.98,
          lng: 23.1891,
        },
      },
      sizeHectares: 4211,
      established: 2010,
      biodiversity: {
        speciesCount: 1107,
        protectedSpecies: 22,
        dominantHabitats: ["forest", "wetlands"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 40,
        bikeRoutesKm: 56,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife"],
        },
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 12,
      },
      entryFee: 0,
      ratings: {
        average: 4,
        reviews: 3500,
      },
      tags: ["nature", "hiking", "family", "wildlife", "photography"],
    },
    {
      id: 92,
      name: "Eco Park 92",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.617,
          lng: 23.3456,
        },
      },
      sizeHectares: 4152,
      established: 2011,
      biodiversity: {
        speciesCount: 604,
        protectedSpecies: 3,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 68,
        bikeRoutesKm: 28,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate"],
        },
      },
      transport: {
        busRoutes: 2,
        nearestStationKm: 10.8,
      },
      entryFee: 0,
      ratings: {
        average: 2.1,
        reviews: 3495,
      },
      tags: ["nature", "family", "wildlife"],
    },
    {
      id: 93,
      name: "Eco Park 93",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.4477,
          lng: 23.395,
        },
      },
      sizeHectares: 538,
      established: 2012,
      biodiversity: {
        speciesCount: 196,
        protectedSpecies: 47,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 99,
        bikeRoutesKm: 63,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 3,
        nearestStationKm: 7.6,
      },
      lakes: [
        {
          name: "Lake 93-1",
          areaHa: 25,
          swimmable: false,
        },
        {
          name: "Lake 93-2",
          areaHa: 43,
          swimmable: true,
        },
      ],
      entryFee: 1.05,
      ratings: {
        average: 2.5,
        reviews: 3141,
      },
      tags: ["nature", "hiking", "wildlife", "photography"],
    },
    {
      id: 94,
      name: "Eco Park 94",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9776,
          lng: 23.1718,
        },
      },
      sizeHectares: 2868,
      established: 2013,
      biodiversity: {
        speciesCount: 43,
        protectedSpecies: 73,
        dominantHabitats: ["forest"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 1,
        bikeRoutesKm: 20,
      },
      transport: {
        busRoutes: 4,
        nearestStationKm: 14.5,
      },
      lakes: [
        {
          name: "Lake 94-1",
          areaHa: 35,
          swimmable: true,
        },
        {
          name: "Lake 94-2",
          areaHa: 21,
          swimmable: true,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 0.9,
        reviews: 4369,
      },
      tags: ["hiking", "family", "photography"],
    },
    {
      id: 95,
      name: "Eco Park 95",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.9216,
          lng: 23.705,
        },
      },
      sizeHectares: 4933,
      established: 2014,
      biodiversity: {
        speciesCount: 836,
        protectedSpecies: 14,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 69,
        bikeRoutesKm: 37,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      entryFee: 0.1,
      ratings: {
        average: 2.3,
        reviews: 1685,
      },
      tags: ["nature", "hiking", "wildlife"],
    },
    {
      id: 96,
      name: "Eco Park 96",
      country: "Lithuania",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3058,
          lng: 23.1354,
        },
      },
      sizeHectares: 2725,
      established: 2015,
      biodiversity: {
        speciesCount: 168,
        protectedSpecies: 17,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 39,
        bikeRoutesKm: 70,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife"],
        },
      },
      entryFee: 0,
      ratings: {
        average: 3.2,
        reviews: 4342,
      },
      tags: ["hiking", "wildlife"],
    },
    {
      id: 97,
      name: "Eco Park 97",
      country: "Latvia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.2834,
          lng: 23.7328,
        },
      },
      sizeHectares: 2906,
      established: 2016,
      biodiversity: {
        speciesCount: 434,
        protectedSpecies: 51,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 24,
        bikeRoutesKm: 18,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      lakes: [
        {
          name: "Lake 97-1",
          areaHa: 17,
          swimmable: true,
        },
      ],
      entryFee: 1.27,
      ratings: {
        average: 1.5,
        reviews: 565,
      },
      tags: ["nature", "hiking"],
    },
    {
      id: 98,
      name: "Eco Park 98",
      country: "Estonia",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.697,
          lng: 23.1262,
        },
      },
      sizeHectares: 1326,
      established: 2017,
      biodiversity: {
        speciesCount: 1176,
        protectedSpecies: 22,
        dominantHabitats: ["forest", "wetlands", "grassland"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 55,
        bikeRoutesKm: 71,
        visitorCenter: {
          openYearRound: false,
          exhibitions: ["wildlife"],
        },
      },
      lakes: [
        {
          name: "Lake 98-1",
          areaHa: 16,
          swimmable: false,
        },
      ],
      entryFee: 0,
      ratings: {
        average: 2.8,
        reviews: 4840,
      },
      tags: ["family", "photography"],
    },
    {
      id: 99,
      name: "Eco Park 99",
      country: "Poland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.3325,
          lng: 23.1382,
        },
      },
      sizeHectares: 3605,
      established: 2018,
      biodiversity: {
        speciesCount: 974,
        protectedSpecies: 42,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: false,
        hikingTrailsKm: 65,
        bikeRoutesKm: 66,
        visitorCenter: {
          openYearRound: true,
          exhibitions: ["wildlife", "climate", "geology"],
        },
      },
      transport: {
        busRoutes: 3,
        nearestStationKm: 4.7,
      },
      entryFee: 1.86,
      ratings: {
        average: 1.1,
        reviews: 296,
      },
      tags: ["hiking", "family", "wildlife"],
    },
    {
      id: 100,
      name: "Eco Park 100",
      country: "Finland",
      region: {
        continent: "Europe",
        coordinates: {
          lat: 54.7697,
          lng: 23.6422,
        },
      },
      sizeHectares: 2615,
      established: 2019,
      biodiversity: {
        speciesCount: 646,
        protectedSpecies: 61,
        dominantHabitats: ["forest", "wetlands", "grassland", "bog"],
      },
      facilities: {
        camping: true,
        hikingTrailsKm: 78,
        bikeRoutesKm: 44,
      },
      transport: {
        busRoutes: 2,
        nearestStationKm: 10.1,
      },
      entryFee: 2.2,
      ratings: {
        average: 3.7,
        reviews: 1385,
      },
      tags: ["hiking", "wildlife"],
    },
  ];
  