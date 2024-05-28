import { defineStore } from "pinia";

interface ICategory {
    id: number,
    name: string,
    description: string
}


export const useCategoriesStore = defineStore('useCategoriesStore', {
    state:() => ({
        categories: [] as ICategory[]
    }),
    actions: {
        async fetchCategories() {
            try {
                const response = await fetch('http://localhost:8000/api/categories');
                const data = await response.json();
                this.categories = data;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
    }

});