import axios from "@/config/axios";

export async function getTopics(limit: string)
{
    try {
        const response = await axios(`/topics?limit=${limit}`)
        this.topics = response.data
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}