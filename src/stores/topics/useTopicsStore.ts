import { defineStore } from "pinia";
import { ITopic } from "@/types";
import { getTopics } from "./actions";


export const useTopicsStore = defineStore('useTopicsStore', {
    state: () => ({
        topics: [] as ITopic[]
    }),
    actions: {
        getTopics
    }
})