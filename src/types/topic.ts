import { ICategory } from "./category";
import { IUser } from "./user";

export interface ITopic {
    id: number;
    title: string;
    content: string;
    views_count: number;
    replies_count: number;
    created_at: string;
    user: IUser;
    categories: ICategory[];
  }
  