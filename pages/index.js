import Hero from "../components/Homepage/Hero";
import FeaturedPosts from "../components/Homepage/FeaturedPosts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJs",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with NextJs1",
    image: "getting-started-with-nextjs.jpg",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJs2",
    image: "getting-started-with-nextjs.jpg",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJs3",
    image: "getting-started-with-nextjs.jpg",
    excerpt:
      "NextJs is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
}
