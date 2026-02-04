import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function uploadImageToServer(image: FormData) {
    try {
        const res = await axios.post(`${API_URL}files/upload`, image, {
            method: 'POST',
            headers: {
                'Accept': 'aplication/json',
                "Content-Type": "multipart/form-data",
            }
        });
        return res;
    } catch(error) {
        console.error("Error uploading image:", error);
        throw error;
    }
}
