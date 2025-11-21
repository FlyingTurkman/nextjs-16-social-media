'use client'

import { postType } from "@/types"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"









export type siteContextType = {
    posts: postType[]
    setPosts: Dispatch<SetStateAction<postType[]>>
}


export const SiteContext = createContext<siteContextType>({
    posts: [],
    setPosts: () => {}
})


export function useSiteContext(): siteContextType {
    const ctx = useContext(SiteContext)

    if (!ctx) {
        throw new Error('useSite must within SiteContextProvider')
    }

    return ctx
}





export default function SiteContextProvider({
    children
}: {
    children: ReactNode
}) {

    const [posts, setPosts] = useState<postType[]>([])

    const value: siteContextType = {
        posts,
        setPosts
    }
    return (
        <SiteContext.Provider
        value={value}
        >
            {children}
        </SiteContext.Provider>
    )
}