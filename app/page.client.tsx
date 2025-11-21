'use client'

import { Suspense, useEffect } from "react"
import Loading from "./loading"
import { postType, userType } from "@/types"
import PostCard from "@/components/mainPage/PostCard"
import { useSiteContext } from "@/context/SiteContextProvider"














export default function MainPageClient({
    posts: initialPosts,
    users
}: {
    posts: postType[],
    users: userType[]
}) {

    const { posts, setPosts } = useSiteContext()

    useEffect(() => {
        setPosts(initialPosts)
    }, [])
    return (
        <div
        className="flex flex-row flex-wrap container mx-auto"
        >
            <Suspense
            fallback={<Loading/>}
            >
            {posts.map((post) => {
    
                const user = users.find((u) => u.id == post.userId)
                return (
                <div
                key={post.id}
                className="p-2 basis-1/5 h-full"
                >
                    <PostCard
                    post={post}
                    user={user}
                    />
                </div>
                )
            })}
            </Suspense>
        </div>
    )
}