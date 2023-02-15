import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
const dummyPost = {
  slug: "getting-started-with-nextjs-4",
  title: "Getting strated",
  image: "image2.jpg",
  date: "2023-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${dummyPost.slug}/${dummyPost.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={dummyPost.title} image={imagePath} />
      <ReactMarkdown>{dummyPost.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
