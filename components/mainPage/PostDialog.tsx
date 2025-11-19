'use client'

import { postType, userType } from "@/types"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { H2 } from "../ui/h2"
import { Separator } from "../ui/separator"
import { P } from "../ui/p"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { nameAvatarConverter } from "@/lib/src/nameAvatarConverter"
import { Button } from "../ui/button"
import { FaComment, FaHeart } from "react-icons/fa6"

















export default function PostDialog({
    post,
    user
}: {
    post: postType,
    user?: userType
}) {

    return (
        <Dialog>
            <DialogTrigger>
                <div
                className="flex flex-col gap-4"
                >
                    <H2>
                        {post.title}
                    </H2>
                    <Separator/>
                    <P>
                        {post.body}
                    </P>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
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
                    </DialogTitle>
                </DialogHeader>
                <Separator/>
                <H2>
                    {post.title}
                </H2>
                <Separator/>
                <P>
                    {post.body}
                </P>
                <Separator/>
                <DialogFooter>
                    <div
                    className="flex flex-row items-center justify-between w-full"
                    >
                        <Button>
                            <FaHeart/>
                            123
                        </Button>
                        <Button
                        variant={'secondary'}
                        >
                            <FaComment/>
                            656
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}