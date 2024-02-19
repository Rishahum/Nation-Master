import { Country } from "@/lib/types";

export default async function handler(country : Country) {
    const response= await fetch(`http://localhost:2000/country/add`,{
        method: 'post',
        body:JSON.stringify(country),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const add = await response.json()
    console.log(add)
    return add; 
}