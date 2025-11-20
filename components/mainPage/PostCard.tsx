'use client'

import { postType, userType } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import PostDialog from "./PostDialog"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { nameAvatarConverter } from "@/lib/src/nameAvatarConverter"
import { useState } from "react"














export default function PostCard({
    post,
    user
}: {
    post: postType,
    user?: userType
}) {


    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div
                    className="flex flex-row items-center gap-4"
                    >
                        <Avatar>
                            <AvatarFallback>
                                {nameAvatarConverter(user?.username)}
                            </AvatarFallback>
                        </Avatar>
                        {user?.username}
                    </div>
                </CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent>
                <PostDialog
                post={post}
                user={user}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                />
            </CardContent>
        </Card>
    )
}