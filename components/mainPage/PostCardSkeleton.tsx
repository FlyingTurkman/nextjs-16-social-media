'use client'

import { Avatar, AvatarFallback } from "../ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import { Skeleton } from "../ui/skeleton"


















export default function PostCardSkeleton() {

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div
                    className="flex flex-row items-center gap-4"
                    >
                        <Avatar>
                            <AvatarFallback>
                                <Skeleton className="aspect-square w-full"/>
                            </AvatarFallback>
                        </Avatar>
                        <Skeleton className="w-full h-10"/>
                    </div>
                </CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent>
                <div
                className="flex flex-col gap-2"
                >
                    <Skeleton className="w-full h-8"/>
                    <Separator/>
                    <Skeleton className="w-full h-6"/>
                    <Separator/>
                    <Skeleton className="w-full h-6"/>
                    <Skeleton className="w-full h-6"/>
                </div>
            </CardContent>
        </Card>
    )
}