import styles from "./Homepage.module.scss";
import PostsGrid from "../Posts/PostsGrid";

export default function FeaturedPosts(props) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
