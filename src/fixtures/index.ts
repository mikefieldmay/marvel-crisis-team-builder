import {
  Character,
  AVENGERS,
  CABAL,
  WAKANDA,
  ASGARD,
  GUARDIANS_OF_THE_GALAXY
} from "../types/index";

export const characters: Character[] = [
  {
    id: 1,
    name: "Captain America",
    threatLevel: 4,
    factionLeader: AVENGERS,
    factions: [AVENGERS],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/captain_america.jpg",
        alt: "Captain America Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/captain_america.jpg",
        alt: "Captain America Injured"
      }
    }
  },
  {
    id: 2,
    name: "Iron Man",
    threatLevel: 3,
    factions: [AVENGERS],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/iron_man.jpg",
        alt: "Iron Man Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/iron_man.jpg",
        alt: "Iron Man Injured"
      }
    }
  },
  {
    id: 3,
    name: "Spider-Man",
    threatLevel: 4,
    factions: [],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/spiderman.jpg",
        alt: "Spider-Man Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/spiderman.jpg",
        alt: "Spider-Man Injured"
      }
    }
  },
  {
    id: 4,
    name: "Black Widow",
    threatLevel: 2,
    factions: [AVENGERS],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/black_widow.jpg",
        alt: "Black Widow Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/black_widow.jpg",
        alt: "Black Widow Injured"
      }
    }
  },
  {
    id: 5,
    name: "Captain Marvel",
    threatLevel: 4,
    factions: [AVENGERS],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/captain_marvel.jpg",
        alt: "Captain Marvel Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/captain_marvel.jpg",
        alt: "Captain Marvel Injured"
      }
    }
  },
  {
    id: 6,
    name: "Red Skull",
    threatLevel: 4,
    factionLeader: CABAL,
    factions: [CABAL],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/red_skull.jpg",
        alt: "Red Skull Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/red_skull.jpg",
        alt: "Red Skull Injured"
      }
    }
  },
  {
    id: 7,
    name: "Doctor Octopus",
    threatLevel: 3,
    factions: [],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/doctor_octopus.jpg",
        alt: "Doctor Octopus Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/doctor_octopus.jpg",
        alt: "Doctor Octopus Injured"
      }
    }
  },
  {
    id: 8,
    name: "Baron Zemo",
    threatLevel: 3,
    factions: [CABAL],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/baron_zemo.jpg",
        alt: "Baron Zemo Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/baron_zemo.jpg",
        alt: "Baron Zemo Injured"
      }
    }
  },
  {
    id: 9,
    name: "Ultron",
    threatLevel: 4,
    factions: [CABAL],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/ultron.jpg",
        alt: "Ultron Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/ultron.jpg",
        alt: "Ultron Injured"
      }
    }
  },
  {
    id: 10,
    name: "Crossbones",
    threatLevel: 3,
    factions: [CABAL],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/crossbones.jpg",
        alt: "Cross Bones Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/crossbones.jpg",
        alt: "Cross Bones Injured"
      }
    }
  },
  {
    id: 11,
    name: "Black Panther",
    threatLevel: 4,
    factions: [AVENGERS, WAKANDA],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/black_panther.jpg",
        alt: "Black Panther Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/black_panther.jpg",
        alt: "Black Panther Injured"
      }
    }
  },
  {
    id: 12,
    name: "Killmonger",
    threatLevel: 4,
    factions: [CABAL, WAKANDA],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/killmonger.jpg",
        alt: "Killmonger Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/killmonger.jpg",
        alt: "Killmonger Injured"
      }
    }
  },
  {
    id: 13,
    name: "Shuri",
    threatLevel: 3,
    factions: [WAKANDA],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/shuri.jpg",
        alt: "Shuri Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/shuri.jpg",
        alt: "Shuri Injured"
      }
    }
  },
  {
    id: 14,
    name: "Okoye",
    threatLevel: 2,
    factions: [WAKANDA],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/okoye.jpg",
        alt: "Okoye Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/okoye.jpg",
        alt: "Okoye Injured"
      }
    }
  },
  {
    id: 15,
    name: "Hulk",
    threatLevel: 6,
    factions: [AVENGERS],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/hulk.jpg",
        alt: "Hulk Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/hulk.jpg",
        alt: "Hulk Healthy"
      }
    }
  },
  {
    id: 16,
    name: "M.O.D.O.K",
    threatLevel: 5,
    factions: [CABAL],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/modok.jpg",
        alt: "M.O.D.O.K Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/modok.jpg",
        alt: "M.O.D.O.K Injured"
      }
    }
  },
  {
    id: 17,
    name: "Venom",
    threatLevel: 4,
    factions: [],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/venom.jpg",
        alt: "Venom Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/venom.jpg",
        alt: "Venom Injured"
      }
    }
  },
  {
    id: 18,
    name: "Loki, God of Mischief",
    threatLevel: 4,
    factions: [CABAL, ASGARD],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/loki.jpg",
        alt: "Loki Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/loki.jpg",
        alt: "Loki Injured"
      }
    }
  },
  {
    id: 19,
    name: "Hela, Queen of Hel",
    threatLevel: 4,
    factions: [ASGARD],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/hela.jpg",
        alt: "Hela Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/hela.jpg",
        alt: "Hela Injured"
      }
    }
  },
  {
    id: 20,
    name: "Thor, Prince of Asgard",
    threatLevel: 5,
    factions: [CABAL, WAKANDA],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/thor.jpg",
        alt: "Thor Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/thor.jpg",
        alt: "Thor Injured"
      }
    }
  },
  {
    id: 21,
    name: "Valkyrie",
    threatLevel: 3,
    factions: [ASGARD],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/valkyrie.jpg",
        alt: "Valkyrie Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/valkyrie.jpg",
        alt: "Valkyrie Injured"
      }
    }
  },
  {
    id: 22,
    name: "Star-Lord",
    threatLevel: 3,
    factionLeader: GUARDIANS_OF_THE_GALAXY,
    factions: [GUARDIANS_OF_THE_GALAXY],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/star_lord.jpg",
        alt: "Star-Lord Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/star_lord.jpg",
        alt: "Star-Lord Injured"
      }
    }
  },
  {
    id: 23,
    name: "Groot",
    threatLevel: 3,
    factions: [GUARDIANS_OF_THE_GALAXY],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/groot.jpg",
        alt: "Groot Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/groot.jpg",
        alt: "Groot Injured"
      }
    }
  },
  {
    id: 24,
    name: "Rocket Raccoon",
    threatLevel: 2,
    factions: [GUARDIANS_OF_THE_GALAXY],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/rocket_raccoon.jpg",
        alt: "Rocket Raccoon Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/rocket_raccoon.jpg",
        alt: "Rocket Raccoon Injured"
      }
    }
  },
  {
    id: 25,
    name: "Nebula",
    threatLevel: 2,
    factions: [GUARDIANS_OF_THE_GALAXY],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/nebula.jpg",
        alt: "Nebula Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/nebula.jpg",
        alt: "Nebula Injured"
      }
    }
  },
  {
    id: 26,
    name: "Gamora",
    threatLevel: 4,
    factions: [GUARDIANS_OF_THE_GALAXY],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/gamora.jpg",
        alt: "Gamora Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/gamora.jpg",
        alt: "Gamora Injured"
      }
    }
  },
  {
    id: 27,
    name: "Vision",
    threatLevel: 4,
    factions: [AVENGERS],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/vision.jpg",
        alt: "Vision Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/vision.jpg",
        alt: "Vision Injured"
      }
    }
  },
  {
    id: 28,
    name: "Winter Soldier",
    threatLevel: 4,
    factions: [],
    images: {
      healthy: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/winter_soldier.jpg",
        alt: "Winter Soldier Healthy"
      },
      injured: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/winter_soldier.jpg",
        alt: "Winter Soldier Injured"
      }
    }
  }
];
