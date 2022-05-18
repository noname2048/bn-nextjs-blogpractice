import Hero from "../components/Homepage/Hero";
import FeaturedPosts from "../components/Homepage/FeaturedPosts";
import { getFeaturedPosts } from "../lib/post-utils";
import { handleClientScriptLoad } from "next/script";

export default function Home(props) {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </div>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: { posts: featuredPosts },
  };
}
