import axios from "@/config/axios";

export async function getLimitedTopics()
{
    try {
        const response = await axios('/topics?limit=15')
        this.topics = response.data
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}