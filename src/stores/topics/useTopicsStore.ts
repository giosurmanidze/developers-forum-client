import { defineStore } from "pinia";
import { ITopic } from "@/types";
import { getLimitedTopics } from "./actions";


export const useTopicsStore = defineStore('useTopicsStore', {
    state: () => ({
        topics: [] as ITopic[]
    }),
    actions: {
        getLimitedTopics
    }
})