import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

const whatsappHref =
  "https://wa.me/263772381330?text=Hello%20Topsy%27s%20Cuisine%2C%20I%27d%20like%20to%20enquire%20about%20catering.";

const services = [
  {
    number: "01",
    title: "Event catering",
    body: "Generous, colourful food for family celebrations, community gatherings and special occasions.",
  },
  {
    number: "02",
    title: "Made-to-order meals",
    body: "Comforting plates and practical meal options prepared with care and full flavour.",
  },
  {
    number: "03",
    title: "Cooking classes",
    body: "Friendly, step-by-step lessons for kids and adults—from simple dishes to confident cooking.",
  },
];

const gallery = [
  { src: "/images/IMG-20231028-WA0017.jpg", alt: "A generous mixed plate with chicken, beef, salads and vegetables" },
  { src: "/images/IMG-20231028-WA0015.jpg", alt: "Freshly plated fried chicken with rice, vegetables and creamy salad" },
  { src: "/images/IMG-20231028-WA0014.jpg", alt: "A colourful plate of grilled meat, chicken, potatoes and vegetables" },
  { src: "/images/IMG-20231028-WA0013.jpg", alt: "A freshly prepared filled roll cut in half" },
];

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Topsy's Cuisine home">
          <span className={styles.brandMark}>T</span>
          <span>Topsy&apos;s Cuisine</span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#services">What we do</a>
          <a href="#story">Our story</a>
          <a href="#gallery">Food gallery</a>
          <Link href="/events">Events</Link>
        </nav>
        <a className={styles.headerCta} href={whatsappHref} target="_blank" rel="noreferrer">
          Plan your menu
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Catering · Meals · Cooking classes</p>
          <h1>Good food.<br /><em>Happier people.</em></h1>
          <p className={styles.heroIntro}>
            Food made with heart for tables full of stories, celebration and the people who matter most.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={whatsappHref} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <a className={styles.textLink} href="tel:+263772381330">
              Call +263 77 238 1330
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrap}>
            <Image
              src="/images/IMG-20231028-WA0017.jpg"
              alt="A full plate catered by Topsy's Cuisine"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 52vw"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroBadge}>
            <span>Made with</span>
            <strong>heart</strong>
          </div>
        </div>
      </section>

      <section className={styles.marquee} aria-label="Topsy's Cuisine values">
        <span>Tasty recipes</span><i>♥</i><span>Practical skills</span><i>♥</i><span>Healthy meals</span><i>♥</i><span>For the whole family</span>
      </section>

      <section className={styles.services} id="services">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Made for your table</p>
          <h2>Food that brings<br />people together.</h2>
        </div>
        <div className={styles.serviceList}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.story} id="story">
        <div className={styles.storyPortrait}>
          <Image
            src="/images/IMG-20260913-WA0059.jpg"
            alt="Topsy, chef and founder of Topsy's Cuisine"
            fill
            sizes="(max-width: 800px) 90vw, 40vw"
            className={styles.portraitImage}
          />
        </div>
        <div className={styles.storyCopy}>
          <p className={styles.eyebrow}>Meet Topsy</p>
          <h2>Cooking with care,<br />sharing with joy.</h2>
          <p className={styles.lead}>
            Topsy&apos;s Cuisine is built around a simple belief: a good meal can brighten a whole day.
          </p>
          <p>
            From satisfying plates for a crowd to supportive, hands-on cooking lessons, every experience is welcoming, practical and full of flavour.
          </p>
          <div className={styles.signature}>Let&apos;s cook together!</div>
        </div>
      </section>

      <section className={styles.classes}>
        <div>
          <p className={styles.eyebrow}>Learn with Topsy</p>
          <h2>Find your confidence<br />in the kitchen.</h2>
        </div>
        <div className={styles.classDetails}>
          <p>Easy, step-by-step cooking lessons in a fun and supportive environment.</p>
          <ul>
            <li>For kids and adults</li>
            <li>Delicious, practical recipes</li>
            <li>Skills you can use at home</li>
          </ul>
          <a className={styles.lightButton} href="mailto:topsyscuisine@gmail.com?subject=Cooking%20class%20enquiry">
            Ask about a class
          </a>
        </div>
        <div className={styles.priceSeal} aria-label="Ten US dollars a class">
          <strong>$10</strong>
          <span>a class</span>
        </div>
      </section>

      <section className={styles.gallerySection} id="gallery">
        <div className={styles.galleryHeading}>
          <div>
            <p className={styles.eyebrow}>From our kitchen</p>
            <h2>A little taste<br />of what we make.</h2>
          </div>
          <p>Freshly prepared, generously served, and made for sharing.</p>
        </div>
        <div className={styles.galleryGrid}>
          {gallery.map((image, index) => (
            <figure className={styles[`galleryItem${index + 1}`]} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.eventsPreview}>
        <div>
          <p className={styles.eyebrow}>The table has stories</p>
          <h2>Events, coming soon.</h2>
        </div>
        <p>
          We&apos;re preparing a journal of memorable gatherings, the menus we created and the food that brought each occasion to life.
        </p>
        <Link className={styles.textLink} href="/events">Visit the events journal</Link>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.eyebrow}>Let&apos;s make something delicious</p>
        <h2>Tell us what you&apos;re planning.</h2>
        <p>Share your date, guest count and the kind of meal you have in mind. We&apos;ll take it from there.</p>
        <div className={styles.contactActions}>
          <a className={styles.goldButton} href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp us</a>
          <a href="tel:+263772381330">+263 77 238 1330</a>
          <a href="mailto:topsyscuisine@gmail.com">topsyscuisine@gmail.com</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>Topsy&apos;s Cuisine</div>
        <p>Good food. Happier people.</p>
        <p>© {new Date().getFullYear()} Topsy&apos;s Cuisine</p>
      </footer>
    </main>
  );
}
