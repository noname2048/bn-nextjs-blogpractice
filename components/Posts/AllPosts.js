import styles from "./AllPosts.module.scss";
import PostsGrid from "./PostsGrid";

export default function AllPosts(posts) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.post} />
    </section>
  );
}
