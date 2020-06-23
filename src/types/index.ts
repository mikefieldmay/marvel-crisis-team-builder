export const AVENGERS: "Avengers" = "Avengers";
export const WAKANDA: "Wakanda" = "Wakanda";
export const CABAL: "Cabal" = "Cabal";
export const ASGARD: "Asgard" = "Asgard";
export const GUARDIANS_OF_THE_GALAXY: "Guardians of the Galaxy" =
  "Guardians of the Galaxy";
export const BLACK_ORDER: "Black Order" = "Black Order";
export const UNAFILLIATED: "Unaffiliated" = "Unaffiliated";

interface Image {
  src: string;
  alt: string;
}

interface Images {
  front: Image;
  back?: Image;
}

export interface Character {
  id: number; //C1
  name: string;
  threatLevel: number;
  factionLeader?: string;
  factions?: string[];
  gemBearer?: string[];
  images: Images;
}

export interface InfinityGem {
  id: number; // IG1
  name: string;
  threatLevel: number;
  images: Images;
}

export interface TacticCard {
  id: number; // TC1
  name: string;
  affiliation: string;
  keywords: string[];
  images: Images;
}
