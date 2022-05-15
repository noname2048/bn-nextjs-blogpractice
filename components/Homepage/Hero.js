import styles from "./Homepage.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/sky.jpg"
          alt="An image showing Box"
          width={300}
          height={300}
        />
      </div>
      <h1>{"Hi, I'm Sungwook"}</h1>
      <p>Blog about web development - especially backend and python</p>
    </section>
  );
}
