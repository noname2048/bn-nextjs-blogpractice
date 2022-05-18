import styles from "./PostContent.module.scss";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <atricle className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </atricle>
  );
}
