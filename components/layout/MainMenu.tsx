'use client'

import Link from "next/link"
import { FaHome } from "react-icons/fa"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { IoPerson } from "react-icons/io5"
import NewPostDialog from "./NewPostDialog"














export default function MainMenu() {

    return (
        <div
        className="bg-primary text-primary-foreground"
        >
            <div
            className="flex flex-row items-center justify-between container mx-auto p-2 text-2xl"
            >
                <div
                className="flex flex-row items-center gap-4"
                >
                    <Link
                    href={'/'}
                    >
                        <FaHome/>
                    </Link>
                    <NewPostDialog/>
                </div>
                <div>
                    <Avatar>
                        <AvatarFallback
                        className="text-primary text-base"
                        >
                            <IoPerson/>
                        </AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}