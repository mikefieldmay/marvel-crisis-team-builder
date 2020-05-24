export const AVENGERS: "AVENGERS" = "AVENGERS";
export const WAKANDA: "WAKANDA" = "WAKANDA";
export const CABAL: "CABAL" = "CABAL";

interface Image {
  src: string;
  alt: string;
}

export interface Character {
  id: number;
  name: string;
  threatLevel: number;
  factionLeader?: string;
  factions?: string[];
  images: {
    healthy: Image;
    injured: Image;
  };
}
