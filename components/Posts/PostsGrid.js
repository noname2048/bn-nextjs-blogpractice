import styles from "./PostsGrid.module.scss";
import PostItem from "./PostItem";

export default function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post, idx) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
