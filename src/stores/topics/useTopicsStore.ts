import { defineStore } from "pinia";
import axios from "../../config/axios";
import { ITopic } from "../../types";


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