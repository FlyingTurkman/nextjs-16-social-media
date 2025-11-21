'use client'

import { IoCreate, IoSend } from "react-icons/io5"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { SubmitHandler, useForm } from "react-hook-form"
import { user } from "@/lib/src/constants"
import { useSiteContext } from "@/context/SiteContextProvider"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"







export type postFormDataType = {
    userId: number
    id: number
    title: string
    body: string
}





export default function NewPostDialog() {

    const { posts, setPosts } = useSiteContext()

    const form = useForm<postFormDataType>({
        defaultValues: {
            id: posts.length + 1,
            userId: user.id
        }
    })

    const {
        control,
        setValue,
        handleSubmit
    } = form

    const onSubmit: SubmitHandler<postFormDataType> = ((data) => {

        setPosts((prev) => [data, ...prev])
        setValue('id', posts.length + 2)
    })
    return (
        <Dialog>
            <DialogTrigger>
                <IoCreate/>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        New Post
                    </DialogTitle>
                </DialogHeader>
                <Form
                {...form}
                >
                    <form
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                    className="flex flex-col gap-6"
                    >
                        <FormField
                        control={control}
                        name="title"
                        rules={{
                            required: 'Please type a post title.'
                        }}
                        render={({ field }) => (

                            <FormItem>
                                <FormLabel>
                                    Post Title: <FormLabel className="required">*</FormLabel>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={control}
                        name="body"
                        rules={{
                            required: 'Please type a post.'
                        }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Post: <FormLabel className="required">*</FormLabel>
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                    {...field}
                                    className="resize-none h-[200px]"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        <Button
                        type="submit"
                        >
                            <IoSend/>
                            Send
                        </Button>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}