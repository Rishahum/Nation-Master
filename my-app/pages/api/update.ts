import { Country } from "@/lib/types";

export default async function handler(country : Country) {
    const response= await fetch(`http://localhost:2000/country/edit/${country._id}`,{
        method: 'put',
        body:JSON.stringify(country),
        headers:{
            "Content-Type":"application/json"
        }
    });
    const edit = await response.json()
    console.log(edit)
    return edit; 
}
