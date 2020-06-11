import { Character, AVENGERS, CABAL, WAKANDA } from "../types/index";

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
  }
];
