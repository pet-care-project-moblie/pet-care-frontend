import { Gender, Species } from "../constants/pet";


export interface IPreference {
  _profileId?: string;
  species: Species | string;
  size: string;
  isSpayedOrNeutered: boolean | string;
  breed: string;
  generalHealth: string[];
  tags: string[];
  gender: Gender | string;
  vaccinationHistory: string[];
  minBirthdayAt: Date;
  maxBirthdayAt: Date;
  _id?: string;
}
