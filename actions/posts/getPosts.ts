'use server'

import { baseApiPath } from "@/lib/src/constants"
import { postType } from "@/types"










export async function getPosts(): Promise<postType[]> {
  try {
    
    const res = await fetch(`${baseApiPath}/posts`, {
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