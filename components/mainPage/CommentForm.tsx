'use client'

import { user } from "@/lib/src/constants"
import { commentType, postType } from "@/types"
import { SubmitHandler, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { IoSend } from "react-icons/io5"
import { Dispatch, SetStateAction } from "react"







export type commentFormDataType = {
    body: string
    email: string
    postId: number
    id: number
}








export default function CommentForm({
    post,
    setComments
}: {
    post: postType,
    setComments: Dispatch<SetStateAction<commentType[]>>
}) {

    const form = useForm<commentFormDataType>({
        defaultValues: {
            email: user?.email,
            postId: post.id,
            id: Math.floor((Math.random() * 500) + 501)
        }
    })

    const {
        handleSubmit,
        control,
        setValue
    } = form


    const onSubmit: SubmitHandler<commentFormDataType> = ((data) => {
        setComments((prev) => [data, ...prev])
        setValue('body', '')
        setValue('id', Math.floor((Math.random() * 500) + 501))
    })
    return (
        <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex flex-col w-full gap-2"
        >
            <Form
            {...form}
            >
                <FormField
                control={control}
                name="body"
                rules={{
                    required: 'Please type a comment.'
                }}
                render={({ field }) => (
                    <FormItem
                    className="w-full"
                    >
                        <FormControl>
                            <Textarea
                            className="max-h-[150px] h-[150px] w-full resize-none"
                            placeholder="Your comment..."
                            {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <Button
                className="ml-auto"
                >
                    <IoSend/>
                </Button>
            </Form>
        </form>
    )
}