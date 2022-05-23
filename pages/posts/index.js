import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/post-utils";
import Head from "next/head";

export default function AllPostPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related posts"
        />
      </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return { props: { posts: allPosts } };
}
