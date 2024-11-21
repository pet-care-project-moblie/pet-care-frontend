import { ENewsType } from "../constants/news";


export interface INews {
  _id: string;
  title: string;
  content: string;
  images: string[];
  type: ENewsType;
}