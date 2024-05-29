import { defineStore } from "pinia";
import { ICategory } from "@/types";
import { getCategories } from "./actions";


export const useCategoriesStore = defineStore('useCategoriesStore', {
    state:() => ({
        categories: [] as ICategory[],
    }),
    actions: {
        getCategories
    }

});