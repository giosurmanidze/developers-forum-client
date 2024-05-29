import { computed } from "vue";
import { ICategory } from "@/types";

export const defineCategoryColor = computed(() => {
    return (category: ICategory) => {
      return category.name === "Python"
        ? "bg-[#6ECA6E]"
        : category.name === "Html-Css"
          ? "bg-[#df710c]"
          : category.name === "Backend Development"
            ? "bg-[#0a729d]"
            : category.name === "Code Feedback"
              ? "bg-[#86d7ff]"
              : category.name === "C#"
                ? "bg-[#9a4993]"
                : category.name === "Backend Development"
                  ? "bg-[#0a729d]"
                  : "";
    };
  });