import axios from "@/config/axios";
import { ICategory } from "@/types";
import { Ref } from "vue";


export const useCreateTopic =  (categories: Ref<ICategory[]>) => {
    
    const submit = async(values: any) => {
        const cat_ids = categories.value.map((c) => c.id);
        
        const data = {
            title: values.title,
            content: values.content,
            category_ids: cat_ids,
            user_id: 1,
          };
        try {
            const response = await axios.post("/topics", data);
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
    }

    return {
        submit
    }
   
  };