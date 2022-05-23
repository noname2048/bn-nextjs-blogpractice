import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/post-utils";

export default function AllPostPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts } };
}
