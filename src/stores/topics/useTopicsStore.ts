import { defineStore } from "pinia";
import axios from "../../config/axios";


interface IUser {
    id: number,
    name: string,
    email: string,
    created_at: string
}

interface ICategory {
    id:number,
    name: string,
    description: string
}

interface ITopic {
  id: number;
  title: string;
  content: string;
  views_count: number;
  replies_count: number;
  created_at: string;
  user: IUser;
  categories: ICategory[]
}

export const useTopicsStore = defineStore('useTopicsStore', {
    state: () => ({
        topics: [] as ITopic[]
    }),
    actions: {
        async fetchTopics()
        {
            try {
                const response = await axios('/topics')
                this.topics = response.data
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
    }
})