'use client'

import { Avatar, AvatarFallback } from "../ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { Skeleton } from "../ui/skeleton"


















export default function PostCardSkeleton() {

    return (
        <Card
        className="h-[200px]"
        >
            <CardHeader>
                <CardTitle>
                    <div
                    className="flex flex-row items-center gap-4"
                    >
                        <Avatar>
                            <AvatarFallback>
                                <Skeleton/>
                            </AvatarFallback>
                        </Avatar>
                        <Skeleton/>
                    </div>
                </CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent>
                <div
                className="flex flex-col gap-2"
                >
                    <Skeleton/>
                    <Separator/>
                    <Skeleton/>
                    <Separator/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            </CardContent>
        </Card>
    )
}