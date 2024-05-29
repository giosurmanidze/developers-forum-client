import axios from "@/config/axios/index";
import { defineStore } from "pinia";
import { ICategory } from "@/types";


export const useCategoriesStore = defineStore('useCategoriesStore', {
    state:() => ({
        categories: [] as ICategory[]
    }),
    actions: {
        async fetchCategories() {
            try {
                const response = await axios('/categories');
                this.categories = response.data;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
    }

});