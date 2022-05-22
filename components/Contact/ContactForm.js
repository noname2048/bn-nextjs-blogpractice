import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Email</label>
            <input type="text" id="name" required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your message</label>
          <textarea id="message" rows="5"></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
