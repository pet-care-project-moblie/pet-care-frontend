import { Gender, Species, Status, Theme } from "@/constants/pet";
import { ILocation } from "./global";
import { IProfile } from "./profile";

export interface IPet {
  _id: string;
  _numberId: string;
  _profileId: string;
  nickname: string;
  gender: Gender;
  breed?: string;
  location: ILocation;
  species: Species;
  tags: string[];
  images?: string[];
  generalHealth: string[];
  birthdayAt: Date;
  vaccinationHistory: string[];
  theme?: Theme;
  isAlive: boolean;
  notes?: string;
  size: string;
  isHiddened: boolean;
  status: Status;
  isSpayedOrNeutered?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IPetSearch extends IPet {
  profile: IProfile;
}