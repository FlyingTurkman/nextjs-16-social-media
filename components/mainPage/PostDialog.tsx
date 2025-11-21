'use client'

import { commentType, postType, userType } from "@/types"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { H2 } from "../ui/h2"
import { Separator } from "../ui/separator"
import { P } from "../ui/p"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { nameAvatarConverter } from "@/lib/src/nameAvatarConverter"
import { Button, buttonVariants } from "../ui/button"
import { FaComment, FaHeart, FaRegHeart } from "react-icons/fa6"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { getPostComments } from "@/actions/comments/getPostComments"
import PostComment from "./PostComment"
import CommentForm from "./CommentForm"
import { Label } from "../ui/label"

















export default function PostDialog({
    post,
    user,
    isDialogOpen,
    setIsDialogOpen
}: {
    post: postType,
    user?: userType,
    isDialogOpen: boolean,
    setIsDialogOpen: Dispatch<SetStateAction<boolean>>
}) {

    const [isUserLiked, setIsUserLiked] = useState<boolean>(false)
    const [likeCount, setLikeCount] = useState<number>(Math.floor(Math.random() * 100))
    const [comments, setComments] = useState<commentType[]>([])

    useEffect(() => {

        if (isDialogOpen && comments.length == 0) {
            getPostComments(post.id).then((data) => {
                setComments(data)
            })
        }
    }, [post, isDialogOpen])

    

    return (
        <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        >
            <DialogTrigger
            className="w-full"
            >
                <div
                className="flex flex-col gap-2"
                >
                    <H2
                    className="text-lg"
                    >
                        {post.title}
                    </H2>
                    <Separator/>
                    <P
                    className="line-clamp-2 mt-2!"
                    >
                        {post.body}
                    </P>
                    <Separator/>
                    <Label
                    className={buttonVariants({ variant: 'link', className: 'justify-start p-0' })}
                    >
                        Read more...
                    </Label>
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
                        <Button
                        onClick={() => {
                            if (isUserLiked) {
                                setLikeCount((prev) => prev - 1)
                            } else {
                                setLikeCount((prev) => prev + 1)
                            }
                            setIsUserLiked((prev) => !prev)
                        }}
                        >
                            {isUserLiked ? (
                                <FaHeart/>
                            ): (
                                <FaRegHeart/>
                            )}
                            {likeCount}
                        </Button>
                        <Button
                        variant={'secondary'}
                        >
                            <FaComment/>
                            {comments.length}
                        </Button>
                    </div>
                </DialogFooter>
                <Separator/>
                <DialogFooter>
                    <div
                    className="flex flex-col gap-4  max-h-[300px] overflow-auto"
                    >
                        <CommentForm
                        post={post}
                        setComments={setComments}
                        />
                        <Separator/>
                        <div
                        className="flex flex-col w-full gap-4"
                        >
                            {comments.map((comment) => {

                                return (
                                    <PostComment
                                    key={comment.id}
                                    comment={comment}
                                    setComments={setComments}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}