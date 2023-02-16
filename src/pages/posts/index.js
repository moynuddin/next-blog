import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "lib/posts-util";
import React from "react";

const AllPostsPage = (props) => {
  return (
    <div>
      <AllPosts posts={props.posts} />
    </div>
  );
};
export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
