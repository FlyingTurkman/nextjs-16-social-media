'use client'

import PostCardSkeleton from "@/components/mainPage/PostCardSkeleton"














export default function Loading() {

    return (
        <div
        className="flex flex-row flex-wrap container mx-auto "
        >
            <div
            className="p-2 basis-1/5 h-full"
            >
                <PostCardSkeleton/>
            </div>
            <div
            className="p-2 basis-1/5 h-full"
            >
                <PostCardSkeleton/>
            </div>
            <div
            className="p-2 basis-1/5 h-full"
            >
                <PostCardSkeleton/>
            </div>
            <div
            className="p-2 basis-1/5 h-full"
            >
                <PostCardSkeleton/>
            </div>
            <div
            className="p-2 basis-1/5 h-full"
            >
                <PostCardSkeleton/>
            </div>
        </div>
    )
}