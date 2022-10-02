import { useState, useEffect } from "react";
import FeedItem from "./FeedItem";
import { BACKEND_URL } from "../const";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const headers = {
      "x-auth-token": localStorage.getItem("token"),
    };
    const res = await fetch(`${BACKEND_URL}/api/post`, {
      method: "GET",
      headers,
    });
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="m-3 container mx-auto flex-2xl">
      {posts.map((post) => FeedItem(post))}
    </div>
  );
}
