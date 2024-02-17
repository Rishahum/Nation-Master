import { Country } from "@/lib/types";
export default async function handler(country: Country) {
    const response= await fetch(`http://localhost:2000/delete/${country._id}`,{
        method: 'delete',
        headers:{
            "Content-Type":"application/json"
        }
    });
   
    return response.json(); 
}