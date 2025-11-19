import { getPosts } from "@/actions/posts/getPosts";
import { getUsers } from "@/actions/users/getUsers";
import PostCard from "@/components/mainPage/PostCard";
import { baseApiPath } from "@/lib/src/constants";
import { postType, userType } from "@/types";
import { cacheLife } from "next/cache";













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
    <div>

      {posts.map((post) => {

        const user = users.find((u) => u.id == post.userId)
        return (
          <div
          key={post.id}
          className="max-w-xs"
          >
            <PostCard
            post={post}
            user={user}
            />
          </div>
        )
      })}
    </div>
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