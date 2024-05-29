import axios from "@/config/axios";

export async function getTopics()
{
    try {
        const response = await axios('/topics')
        this.topics = response.data
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}