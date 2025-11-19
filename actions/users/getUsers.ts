'use server'

import { baseApiPath } from "@/lib/src/constants";
import { userType } from "@/types";














export async function getUsers(): Promise<userType[]> {

    try {
        
        const res = await fetch(`${baseApiPath}/users`, {
            next: {
                revalidate: 3600
            }
        })

        const response = await res.json()

        return response
    } catch (error) {
        console.log('Error: ', error)

        return []
    }
}