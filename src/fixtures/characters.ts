import {
  Character,
  AVENGERS,
  CABAL,
  WAKANDA,
  ASGARD,
  GUARDIANS_OF_THE_GALAXY,
  BLACK_ORDER,
  InfinityGem
} from "../types/index";

export const characters: (Character | InfinityGem)[] = [
  {
    id: 1,
    name: "Captain America",
    threatLevel: 4,
    factionLeader: AVENGERS,
    factions: [AVENGERS],
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/captain_america.png",
        alt: "Captain America Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/captain_america.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/iron_man.png",
        alt: "Iron Man Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/iron_man.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/spiderman.png",
        alt: "Spider-Man Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/spiderman.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/black_widow.png",
        alt: "Black Widow Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/black_widow.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/captain_marvel.png",
        alt: "Captain Marvel Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/captain_marvel.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/red_skull.png",
        alt: "Red Skull Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/red_skull.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/doctor_octopus.png",
        alt: "Doctor Octopus Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/doctor_octopus.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/baron_zemo.png",
        alt: "Baron Zemo Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/baron_zemo.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/ultron.png",
        alt: "Ultron Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/ultron.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/crossbones.png",
        alt: "Cross Bones Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/crossbones.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/black_panther.png",
        alt: "Black Panther Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/black_panther.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/killmonger.png",
        alt: "Killmonger Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/killmonger.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/shuri.png",
        alt: "Shuri Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/shuri.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/okoye.png",
        alt: "Okoye Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/okoye.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/hulk.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/modok.png",
        alt: "M.O.D.O.K Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/modok.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/venom.png",
        alt: "Venom Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/venom.png",
        alt: "Venom Injured"
      }
    }
  },
  {
    id: 18,
    name: "Loki, God of Mischief",
    threatLevel: 4,
    factions: [CABAL, ASGARD],
    gemBearer: ["Infinity Gem: Time", "Infinity Gem: Space"],
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/loki.png",
        alt: "Loki Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/loki.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/hela.png",
        alt: "Hela Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/hela.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/thor.png",
        alt: "Thor Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/thor.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/valkyrie.png",
        alt: "Valkyrie Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/valkyrie.png",
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
    gemBearer: ["Infinity Gem: Power"],
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/star_lord.png",
        alt: "Star-Lord Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/star_lord.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/groot.png",
        alt: "Groot Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/groot.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/rocket_raccoon.png",
        alt: "Rocket Raccoon Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/rocket_raccoon.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/nebula.png",
        alt: "Nebula Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/nebula.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/gamora.png",
        alt: "Gamora Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/gamora.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/vision.png",
        alt: "Vision Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/vision.png",
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
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/winter_soldier.png",
        alt: "Winter Soldier Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/winter_soldier.png",
        alt: "Winter Soldier Injured"
      }
    }
  },
  {
    id: 29,
    name: "Hawkeye",
    threatLevel: 3,
    factions: [],
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/hawkeye.png",
        alt: "Hawkeye Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/hawkeye.png",
        alt: "Hawkeye Injured"
      }
    }
  },
  {
    id: 30,
    name: "Black Widow, Agent of S.H.I.E.L.D",
    threatLevel: 3,
    factions: [],
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/agent_widow.png",
        alt: "Black Widow, Agent of S.H.I.E.L.D Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/agent_widow.png",
        alt: "Black Widow, Agent of S.H.I.E.L.D Injured"
      }
    }
  },
  {
    id: 31,
    name: "Corvus Glaive",
    threatLevel: 4,
    factions: [BLACK_ORDER],
    gemBearer: ["Infinity Gem: Reality", "Infinity Gem: Time"],
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/corvus_glaive.png",
        alt: "Corvus Glaive Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/corvus_glaive.png",
        alt: "Corvus Glaive Injured"
      }
    }
  },
  {
    id: 32,
    name: "Proxima Midnight",
    threatLevel: 3,
    factions: [],
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/proxima_midnight.png",
        alt: "Proxima Midnight Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/proxima_midnight.png",
        alt: "Proxima Midnight Injured"
      }
    }
  },
  {
    id: 33,
    name: "Thanos",
    threatLevel: 6,
    factions: [],
    gemBearer: [
      "Infinity Gem: Reality",
      "Infinity Gem: Time",
      "Infinity Gem: Power",
      "Infinity Gem: Space",
      "Infinity Gem: Mind",
      "Infinity Gem: Soul"
    ],
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/healthy/thanos.png",
        alt: "Thanos Healthy"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/characters/injured/thanos.png",
        alt: "Thanos Injured"
      }
    }
  },
  {
    id: 34,
    name: "Infinity Gem: Mind",
    threatLevel: 1,
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/front/mind.png",
        alt: "Infinity Gem: Mind"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/back/mind.png",
        alt: "Infinity Gem: Mind"
      }
    }
  },
  {
    id: 35,
    name: "Infinity Gem: Power",
    threatLevel: 1,
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/front/power.png",
        alt: "Infinity Gem: Power"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/back/power.png",
        alt: "Infinity Gem: Power"
      }
    }
  },
  {
    id: 36,
    name: "Infinity Gem: Time",
    threatLevel: 2,
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/front/time.png",
        alt: "Infinity Gem: Time"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/back/time.png",
        alt: "Infinity Gem: Time"
      }
    }
  },
  {
    id: 37,
    name: "Infinity Gem: Soul",
    threatLevel: 1,
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/front/soul.png",
        alt: "Infinity Gem: Soul"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/back/soul.png",
        alt: "Infinity Gem: Soul"
      }
    }
  },
  {
    id: 38,
    name: "Infinity Gem: Space",
    threatLevel: 2,
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/front/space.png",
        alt: "Infinity Gem: Space"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/back/space.png",
        alt: "Infinity Gem: Space"
      }
    }
  },
  {
    id: 39,
    name: "Infinity Gem: Reality",
    threatLevel: 1,
    images: {
      front: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/front/reality.png",
        alt: "Infinity Gem: Reality"
      },
      back: {
        src:
          "https://crisis-protocol.s3.eu-west-2.amazonaws.com/infinity_gems/back/reality.png",
        alt: "Infinity Gem: Reality"
      }
    }
  }
];
