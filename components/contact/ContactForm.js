import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [enterdEmail, setEnteredEmail] = useState("");
  const [enterdName, setEnteredName] = useState("");
  const [enterdMessage, setEnteredMessage] = useState("");

  function sendMessageHandler(event) {
    event.preventDefault();

    // optional: add client-side validation

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: enterdEmail,
        name: enterdName,
        message: enterdMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enterdEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enterdName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows="5"
            value={enterdMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
