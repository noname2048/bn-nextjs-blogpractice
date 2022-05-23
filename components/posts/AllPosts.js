import { getStaticProps } from "../../pages";
import styles from "./AllPosts.module.scss";
import PostsGrid from "./PostsGrid";

export default function AllPosts(props) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
