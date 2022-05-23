import Hero from "../components/homepage/Hero";
import FeaturedPosts from "../components/homepage/FeaturedPosts";
import { getFeaturedPosts } from "../lib/post-utils";

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
