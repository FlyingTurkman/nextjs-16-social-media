'use client'

import { commentType } from "@/types"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { nameAvatarConverter } from "@/lib/src/nameAvatarConverter"
import { Label } from "../ui/label"
import { Separator } from "../ui/separator"
import { P } from "../ui/p"
import { Dispatch, SetStateAction } from "react"
import { Button } from "../ui/button"
import { IoTrashBinOutline } from "react-icons/io5"
import { FaTrash, FaTrashCan } from "react-icons/fa6"
import { user } from "@/lib/src/constants"

















export default function PostComment({
    comment,
    setComments
}: {
    comment: commentType,
    setComments: Dispatch<SetStateAction<commentType[]>>
}) {
    return (
        <div
        className="flex flex-col gap-2 border border-border p-4 rounded-xl shadow relative"
        >
            {comment.email == user.email && (
                <Button
                variant={'destructive'}
                size={'icon-sm'}
                className="absolute right-2 top-2"
                onClick={() => {
                    setComments((prev) => prev.filter((p) => p.id != comment.id))
                }}
                >
                    <FaTrashCan/>
                </Button>
            )}
            <div
            className="flex flex-row items-center gap-4"
            >
                <Avatar>
                    <AvatarFallback>
                        {nameAvatarConverter(comment.email.split('@')[0])}
                    </AvatarFallback>
                </Avatar>
                <Label>
                    {comment.email.split('@')[0]}
                </Label>
            </div>
            <Separator/>
            <P
            className="mt-0!"
            >
                {comment.body}
            </P>
        </div>
    )
}