import styles from "./PostContent.module.scss";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJs",
  image: "getting-started-with-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <atricle className={styles.content}>
      <PostHeader title="" image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </atricle>
  );
}
