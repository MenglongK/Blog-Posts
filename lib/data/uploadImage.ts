import { ImageFile } from "@/components/image-upload";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function uploadImageToServer(image: ImageFile[]) {
    try {
        const res = await axios.post(`${API_URL}files/upload`, image, {
            method: 'POST',
            headers: {
                'Accept': 'aplication/json',
                "Content-Type": "multipart/form-data",
            }
        });
        return res;
    } catch (error: any) {
        console.log("Error Status", error?.response?.status);
        console.log("Error Data", error?.response?.data);
    }
}
