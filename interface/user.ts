import { EUserRole } from "@/constants/user";

;

export interface IUser {
  _id: string;
  email: string;
  username: string;
  role: EUserRole[];
  password: string;
  identityCard: string;
}

export interface IUserEditForm {
  images: string[];
  firstname: string;
  lastname: string;
  phone: string;
  email: string
  birthdayAt: Date;
  identityCard?: string;
}