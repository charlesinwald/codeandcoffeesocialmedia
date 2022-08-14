import { useState } from "react";
import FeedItem from "./FeedItem";

const posts = [
  {
    id: 1,
    title: "Post 1",
    owner_id: 1,
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    title: "Post 2",
    owner_id: 1,
    image: "https://source.unsplash.com/random",
  },
];

export default function Feed() {
  return (
    <div className="m-3 container mx-auto flex-2xl">
      {posts.map((post) => (
        FeedItem(post)
      ))}
    </div>
  );
}


