//"use client";

import Link from "next/link";
import Todo from "../components/todo";
//import { useEffect, useState } from "react";
// export const metadata: Metadata = {
//   title: "Posts Page",
// };

const PostsPage = async () => {
  //hedhi bil react normal =>client side
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }, []);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);
  //const [todo, setTodo] = useState({});
  return (
    <div>
      <div>PostsPage</div>
      <div className="posts_container">
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post.id}`} style={{ width: "70%" }}>
              <div key={post.id} className="post_item">
                <h1>title:{post.title}</h1>
                <p>body:{post.body}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div>
        <Todo />
      </div>
      <Link href="/articles">
        <button>return to the article page</button>
      </Link>
      <h1></h1>
    </div>
  );
};

export default PostsPage;
