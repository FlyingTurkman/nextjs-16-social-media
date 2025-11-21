import { getPosts } from "@/actions/posts/getPosts";
import { getUsers } from "@/actions/users/getUsers";
import PostCard from "@/components/mainPage/PostCard";
import { postType, userType } from "@/types";
import { cacheLife } from "next/cache";
import { Suspense } from "react";
import Loading from "./loading";
import MainPageClient from "./page.client";













export default async function Home() {
  'use cache'
  cacheLife({
    stale: 3600,
    revalidate: 3600,
    expire: 86400
  })

  const {
    users,
    posts
  } = await getPostsAndUsers()

  return (
    <MainPageClient
    posts={posts}
    users={users}
    />
  );
}


type responseType = {
  users: userType[],
  posts: postType[]
}


async function getPostsAndUsers(): Promise<responseType> {
  try {
    
    const [
      posts,
      users
    ] = await Promise.all([
      getPosts(),
      getUsers()
    ])

    return {
      users,
      posts
    }

  } catch (error) {
    console.log('Error: ', error)

    return {
      users: [],
      posts: []
    }
  }
}