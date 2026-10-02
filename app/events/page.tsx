import styles from "./events.module.scss";
import MotionObserver from "../MotionObserver";

export const metadata = {
  title: "Events | Topsy's Cuisine",
  description: "Stories, menus and memorable tables catered by Topsy's Cuisine.",
};

export default function EventsPage() {
  return (
    <main className={styles.page}>
      <MotionObserver />
      <nav className={styles.nav}>
        <a href="/">← Back home</a>
        <span>Topsy&apos;s Cuisine</span>
      </nav>
      <section className={styles.content} data-reveal>
        <p className={styles.eyebrow}>Events journal</p>
        <h1>Every table<br />tells a story.</h1>
        <p>
          This is where we&apos;ll share the celebrations we cater, the menus behind them and a closer look at the food served on the day.
        </p>
        <div className={styles.note}>
          <span>Coming soon</span>
          <p>Planning an event now? Topsy would love to hear about it.</p>
          <a href="https://wa.me/263710825380?text=Hello%20Topsy%27s%20Cuisine%2C%20I%27m%20planning%20an%20event." target="_blank" rel="noreferrer">Start on WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
