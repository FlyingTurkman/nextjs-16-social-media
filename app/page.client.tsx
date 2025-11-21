'use client'

import { Suspense, useEffect, useRef, useState } from "react"
import Loading from "./loading"
import { postType, userType } from "@/types"
import PostCard from "@/components/mainPage/PostCard"
import { useSiteContext } from "@/context/SiteContextProvider"
import PostCardSkeleton from "@/components/mainPage/PostCardSkeleton"














export default function MainPageClient({
    posts: initialPosts,
    users
}: {
    posts: postType[],
    users: userType[]
}) {

    const { posts, setPosts } = useSiteContext()

    const [isPostLoading, setIsPostLoading] = useState<boolean>(false)

    useEffect(() => {
        setPosts(initialPosts)
    }, [])

    useEffect(() => {
        if (posts.length != 0 && initialPosts.length != posts.length) {
            setIsPostLoading(true)
            setTimeout(() => {
                setIsPostLoading(false)
            }, 3000)
        }
    }, [posts, initialPosts])
    return (
        <div
        className="flex flex-row flex-wrap container mx-auto"
        >
            <Suspense
            fallback={<Loading/>}
            >
            {posts.length != 0 && initialPosts.length == posts.length ? initialPosts.map((post, i) => {
                const user = users.find((u) => u.id == post.userId)

                if (isPostLoading && i == 0) {

                    /* It's simulation new post with skeleton loading. */
                    return (
                        <div
                        className="p-2 basis-1/5 h-full"
                        >
                            <PostCardSkeleton/>
                        </div>
                    )
                } else {
                    return (
                    <div
                    className="p-2 basis-1/5 h-full"
                    key={i}
                    >
                        <PostCard
                        post={post}
                        user={user}
                        />
                    </div>
                    )
                }
            }) : posts.map((post, i) => {
                const user = users.find((u) => u.id == post.userId)

                if (isPostLoading && i == 0) {

                    /* It's simulation new post with skeleton loading. */
                    return (
                        <div
                        className="p-2 basis-1/5 h-full"
                        >
                            <PostCardSkeleton/>
                        </div>
                    )
                } else {
                    return (
                    <div
                    className="p-2 basis-1/5 h-full"
                    key={i}
                    >
                        <PostCard
                        post={post}
                        user={user}
                        />
                    </div>
                    )
                }
            })}
            </Suspense>
        </div>
    )
}