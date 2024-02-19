import { Country } from "@/lib/types"

import next from "next";
export default async function handler(id: string) {
    const response= await fetch(`http://localhost:2000/country/get/${id}`)
    return response.json() 
}