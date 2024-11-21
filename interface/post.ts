import { EStatusPosts } from "@/constants/post";
import { IProfile } from "./profile";
import { ILocation } from "./global";

export interface IPost {
  _id: string;
  _profileId: string;
  _receiverId: string;
  content: string;
  images?: string[];
  likes?: string[];
  comments?: IComment[];
  isHidden: boolean;
  tags?: string[];
  location: ILocation;
  status: EStatusPosts;
  createdAt: string;
  updatedAt: string;
}

export interface IComment {
  _profileId: string;
  profile: IProfile;
  text: string;
  likes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IPostPagination extends IPost {
  profile: IProfile;
  receiver: IProfile;
}
