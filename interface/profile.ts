import { AccommodationType } from "@/constants/profile";

export interface IProfile {
  _id?: string;
  _numberId: string;
  _userId: string;
  phone: string;
  images: string[];
  firstname: string;
  lastname: string;
  birthdayAt: Date;
  accommodationType?: AccommodationType;
  level?: number;
  distance?: number;
  freeTime?: number;
  personality?: string[];
  lifestyle?: string;
  lastLogin?: Date;
  identityCard?: string;
}
