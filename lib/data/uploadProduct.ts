import { ProductRequest } from "@/types/product";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function uploadProductToAPI(product: ProductRequest) {
    const res = await axios(`${API_URL}products`, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            "Content-Type": "application/json",
        },
        data: JSON.stringify(product)
    })
    return res;
}
