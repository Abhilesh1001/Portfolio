'use server'
import axios from "axios"
import { baseurl } from "@/data/dataall"


export const habdleSubmit = async (formData: FormData) => {
    const data:any = {
        "name": formData.get('name'),
        "email": formData.get('email'),
        "message":formData.get('message')
    }
    
    try {
        const res: any = await axios.post(`${baseurl}/pro/message/`, data);
        return res?.data?.msg;
    } catch (error) {
        console.error("Error occurred:", error);
        return 'error occurred while updating data';
    }

}