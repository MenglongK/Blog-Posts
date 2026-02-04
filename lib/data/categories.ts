import { Category } from "@/types/category";

export async function fetchCategories() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}categories`);
    console.log(response)
    const data: Category[] = await response.json();
    console.log(data)
    return data;
}