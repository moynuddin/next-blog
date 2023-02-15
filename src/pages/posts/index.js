import AllPosts from "@/components/posts/all-posts";
import React from "react";

const AllPostsPage = () => {
  const dummyData = [
    {
      slug: "getting-started-with-nextjs-1",
      title: "Getting strated",
      image: "image2.jpg",
      excerpt: "next js is the react framework for production",
      date: "2023-02-10",
    },
    {
      slug: "getting-started-with-nextjs-2",
      title: "Getting strated",
      image: "image2.jpg",
      excerpt: "next js is the react framework for production",
      date: "2023-02-10",
    },
    {
      slug: "getting-started-with-nextjs-3",
      title: "Getting strated",
      image: "image2.jpg",
      excerpt: "next js is the react framework for production",
      date: "2023-02-10",
    },
    {
      slug: "getting-started-with-nextjs-4",
      title: "Getting strated",
      image: "image2.jpg",
      excerpt: "next js is the react framework for production",
      date: "2023-02-10",
    },
  ];

  return (
    <div>
      <AllPosts posts={dummyData} />
    </div>
  );
};

export default AllPostsPage;
