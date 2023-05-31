import { useState, useCallback, useEffect } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListContainer } from "./styles";
import { api } from "../../lib/axios";
import { Spinner } from "../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };

}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true);
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`);

      setPosts(response.data.items);
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getPosts();
  }, [getPosts])

  return (
    <div>
      <Profile />

      <SearchInput
        postsLength={posts.length}
        getPosts={getPosts}
      />

      {isLoading ?
        <Spinner />
        :
        <PostsListContainer>
          {posts.map((post) => {
            return (
              <Post
                key={post.number}
                post={post}
              />
            )
          })}

        </PostsListContainer>
      }
    </div>
  )
}