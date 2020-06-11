export const AVENGERS: "AVENGERS" = "AVENGERS";
export const WAKANDA: "WAKANDA" = "WAKANDA";
export const CABAL: "CABAL" = "CABAL";
export const ASGARD: "ASGARD" = "ASGARD";
export const GUARDIANS_OF_THE_GALAXY: "GUARDIANS OF THE GALAXY" =
  "GUARDIANS OF THE GALAXY";

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
