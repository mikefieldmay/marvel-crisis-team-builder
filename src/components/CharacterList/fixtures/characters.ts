const AVENGERS = "AVENGERS";
const WAKANDA = "WAKANDA";
const CABAL = "CABAL";

interface Character {
  id: number;
  name: string;
  threatLevel: number;
  factionLeader?: string;
  factions?: string[];
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Captain America",
    threatLevel: 4,
    factionLeader: AVENGERS,
    factions: [AVENGERS]
  },
  {
    id: 2,
    name: "Iron Man",
    threatLevel: 3,
    factions: [AVENGERS]
  },
  {
    id: 3,
    name: "Spider-Man",
    threatLevel: 4,
    factions: []
  },
  {
    id: 4,
    name: "Black Widow",
    threatLevel: 2,
    factions: [AVENGERS]
  },
  {
    id: 5,
    name: "Captain Marvel",
    threatLevel: 4,
    factions: [AVENGERS]
  },
  {
    id: 6,
    name: "Red Skull",
    threatLevel: 4,
    factionLeader: CABAL,
    factions: [CABAL]
  },
  {
    id: 7,
    name: "Doctor Octopus",
    threatLevel: 3,
    factions: []
  },
  {
    id: 8,
    name: "Baron Zemo",
    threatLevel: 3,
    factions: [CABAL]
  },
  {
    id: 9,
    name: "Ultron",
    threatLevel: 4,
    factions: [CABAL]
  },
  {
    id: 10,
    name: "Crossbones",
    threatLevel: 3,
    factions: [CABAL]
  },
  {
    id: 11,
    name: "Black Panther",
    threatLevel: 4,
    factions: [AVENGERS, WAKANDA]
  },
  {
    id: 12,
    name: "Killmonger",
    threatLevel: 4,
    factions: [CABAL, WAKANDA]
  }
];
