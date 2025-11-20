'use server'

import { baseApiPath } from "@/lib/src/constants";
import { commentType } from "@/types";

















export async function getPostComments(postId: number): Promise<commentType[]> {
    try {
        
        const res = await fetch(`${baseApiPath}/posts/${postId.toString()}/comments`)

        const response = await res.json()

        return response
    } catch (error) {
        console.log('Error: ', error)

        return []
    }
}