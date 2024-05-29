import axios from "@/config/axios/index";

export async function getCategories() {
    try {
        const response = await axios('/categories');
        this.categories = response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}