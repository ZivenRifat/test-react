import React from "react";
import PostCard from "./PostCard";

function UserPost({ posts }) {
  return (
    <div className="grid grid-cols-5 gap-6 justify-items-center max-w-7xl mx-auto">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

export default UserPost;
