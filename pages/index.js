import Hero from "../components/Homepage/Hero";
import FeaturedPosts from "../components/Homepage/FeaturedPosts";
import { getFeaturePosts } from "../lib/post-utils";

export default function Home(props) {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </div>
  );
}

export function getStaticPosts() {
  const featuredPosts = getFeaturePosts();

  return {
    props: { posts: featuredPosts },
  };
}
