import Image from "next/image";
import MotionObserver from "./MotionObserver";
import styles from "./page.module.scss";

const whatsappHref =
  "https://wa.me/263710825380?text=Hello%20Topsy%27s%20Cuisine%2C%20I%27d%20like%20to%20enquire%20about%20catering.";

const services = [
  {
    number: "01",
    icon: "cloche",
    title: "Executive catering",
    body: "Professional food and attentive service for private celebrations, corporate functions and high-profile events.",
  },
  {
    number: "02",
    icon: "menu",
    title: "Tailor-made menus",
    body: "Menus shaped around your occasion, healthy-eating goals, local produce and special dietary requirements.",
  },
  {
    number: "03",
    icon: "table",
    title: "Complete table service",
    body: "Glassware, crockery, cutlery and other serving equipment can be supplied for a smooth, complete event.",
  },
];

const gallery = [
  { src: "/images/59116e56-c674-4764-a652-992157843f6f.jpeg", alt: "Four plated roast meals prepared by Topsy's Cuisine" },
  { src: "/images/bd6e6f27-4816-431c-bcf1-2872d620cf1d.jpeg", alt: "Roast chicken served with rice, pumpkin and salad" },
  { src: "/images/f3e1f0f8-be1c-4803-a532-ff4227853e97.jpeg", alt: "Rich beef stew with rice, vegetables and salad" },
  { src: "/images/ca571683-ab28-4fab-b761-fb0b61929272.jpeg", alt: "Golden chicken pieces served with chips and salad" },
  { src: "/images/IMG-20231028-WA0017.jpg", alt: "A generous mixed plate with chicken, beef, salads and vegetables" },
  { src: "/images/IMG-20231028-WA0013.jpg", alt: "A freshly prepared filled roll cut in half" },
];

const videos = [
  { src: "/videos/140c249a-8768-470d-81ff-039f351b64d3.mp4", label: "In the kitchen", poster: "/images/59116e56-c674-4764-a652-992157843f6f.jpeg" },
  { src: "/videos/31f1ad0c-41d5-423d-ac78-25774b39e969.mp4", label: "Prepared with care", poster: "/images/bd6e6f27-4816-431c-bcf1-2872d620cf1d.jpeg" },
  { src: "/videos/3a953c9e-ef1a-4952-9498-6dfff225676c.mp4", label: "Ready to serve", poster: "/images/f3e1f0f8-be1c-4803-a532-ff4227853e97.jpeg" },
];

function ServiceIcon({ name }: { name: string }) {
  if (name === "menu") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M14 8h20v32H14zM19 16h10M19 23h10M19 30h7" /></svg>;
  }
  if (name === "table") {
    return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 22h32M12 22v18M36 22v18M15 15c0-4 4-7 9-7s9 3 9 7M13 15h22" /></svg>;
  }
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 31h34M11 28c1-10 6-16 13-16s12 6 13 16M24 8v4M5 36h38" /></svg>;
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 10 7.9 8.1 10c1.2 2.5 3.3 4.6 5.8 5.8L16 14l4.5 2.8-.7 3.6c-.2.8-.9 1.3-1.7 1.3C9.4 20.9 3.1 14.6 2.3 5.9c-.1-.8.5-1.5 1.3-1.7l3.6-.7Z" /></svg>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v7h4v-7h3.4l.6-4h-4V9c0-.7.3-1 1-1Z" /></svg>;
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className={styles.iconDot} /></svg>;
}

export default function Home() {
  return (
    <main>
      <MotionObserver />
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Topsy's Cuisine home">
          <span className={styles.brandMark}>T</span>
          <span>Topsy&apos;s Cuisine</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="#services">What we do</a>
          <a href="#story">Our story</a>
          <a href="#gallery">Food gallery</a>
          <a href="#videos">Videos</a>
          <a href="/events/">Events</a>
        </nav>
        <a className={styles.headerCta} href={whatsappHref} target="_blank" rel="noreferrer">
          Plan your menu
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Executive catering · Bulawayo, Zimbabwe</p>
          <h1>A taste of<br /><em>heaven.</em></h1>
          <p className={styles.heroIntro}>
            Fine food, dependable service and tailor-made menus for events where every detail matters.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={whatsappHref} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
            <a className={`${styles.textLink} ${styles.iconLink}`} href="tel:+263710825380" aria-label="Call Topsy on +263 71 082 5380">
              <PhoneIcon /> Call Topsy
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImageWrap}>
            <Image
              src="/images/59116e56-c674-4764-a652-992157843f6f.jpeg"
              alt="A table of plated meals catered by Topsy's Cuisine"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 52vw"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroBadge} data-pop data-pop-delay="hero">
            <span>Made with</span>
            <strong>heart</strong>
          </div>
        </div>
      </section>

      <section className={styles.marquee} aria-label="Topsy's Cuisine values" data-reveal>
        <div className={styles.marqueeTrack}>
          {[false, true].map((duplicate) => (
            <div className={styles.marqueeGroup} aria-hidden={duplicate || undefined} key={String(duplicate)}>
              <span>Fresh ingredients</span><i>♥</i><span>Tailor-made menus</span><i>♥</i><span>Professional service</span><i>♥</i><span>Made in Bulawayo</span><i>♥</i>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.services} id="services" data-reveal>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Made for your occasion</p>
          <h2>Everything your<br />table needs.</h2>
        </div>
        <div className={styles.serviceList}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number} data-reveal-child>
              <div className={styles.serviceCardTop}>
                <span>{service.number}</span>
                <div className={styles.serviceIcon}><ServiceIcon name={service.icon} /></div>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.story} id="story" data-reveal>
        <div className={styles.storyPortrait}>
          <Image
            src="/images/Topsy.jpeg"
            alt="Topsy, chef and founder of Topsy's Cuisine"
            fill
            sizes="(max-width: 800px) 90vw, 40vw"
            className={styles.portraitImage}
          />
        </div>
        <div className={styles.storyCopy}>
          <p className={styles.eyebrow}>Meet Topsy</p>
          <h2>Experience you can<br />trust at your table.</h2>
          <p className={styles.lead}>
            Established in Bulawayo, Topsy&apos;s Cuisine has built its name on fine food, dependable service and genuine care.
          </p>
          <p>
            Topsy and her experienced team understand health, hygiene and the careful preparation large events demand. More than 90% of the food is prepared in-house, with specialist products sourced only from selected suppliers.
          </p>
          <div className={styles.signature}>A taste of heaven</div>
        </div>
      </section>

      <section className={styles.promises} aria-label="Our catering promise" data-reveal>
        <article data-reveal-child><strong>90%+</strong><span>of our food prepared in-house</span></article>
        <article data-reveal-child><strong>Fresh</strong><span>ingredients and strict quality control</span></article>
        <article data-reveal-child><strong>Flexible</strong><span>menus for dietary and healthy-eating needs</span></article>
        <article data-reveal-child><strong>Complete</strong><span>service with tableware and equipment available</span></article>
      </section>

      <section className={styles.classes} data-reveal>
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
        <div className={styles.priceSeal} aria-label="Ten US dollars a class" data-pop data-pop-delay="short">
          <strong>$10</strong>
          <span>a class</span>
        </div>
      </section>

      <section className={styles.gallerySection} id="gallery" data-reveal>
        <div className={styles.galleryHeading}>
          <div>
            <p className={styles.eyebrow}>From our kitchen</p>
            <h2>A little taste<br />of what we make.</h2>
          </div>
          <p>Freshly prepared, generously served, and made for sharing.</p>
        </div>
        <div className={styles.galleryGrid}>
          {gallery.map((image, index) => (
            <figure className={styles[`galleryItem${index + 1}`]} key={image.src} data-reveal-child>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.videoSection} id="videos" data-reveal>
        <div className={styles.videoHeading}>
          <p className={styles.eyebrow}>Behind the scenes</p>
          <h2>See Topsy&apos;s Cuisine<br />in motion.</h2>
          <p>A closer look at the food, preparation and care that goes into every plate.</p>
        </div>
        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <figure key={video.src} data-reveal-child>
              <video controls playsInline preload="metadata" poster={video.poster}>
                <source src={video.src} type="video/mp4" />
                Your browser does not support this video.
              </video>
              <figcaption>{video.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.eventsPreview} data-reveal>
        <div>
          <p className={styles.eyebrow}>The table has stories</p>
          <h2>Events, coming soon.</h2>
        </div>
        <p>
          We&apos;re preparing a journal of memorable gatherings, the menus we created and the food that brought each occasion to life.
        </p>
        <a className={styles.textLink} href="/events/">Visit the events journal</a>
      </section>

      <section className={styles.contact} id="contact" data-reveal>
        <p className={styles.eyebrow}>Let&apos;s make something delicious</p>
        <h2>Tell us what you&apos;re planning.</h2>
        <p>Share your date, guest count, dietary needs and the kind of service you have in mind. Free samples are available on request.</p>
        <div className={styles.contactActions}>
          <a className={styles.goldButton} href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp us</a>
          <a className={styles.contactIconLink} href="tel:+263710825380" aria-label="Call Topsy on +263 71 082 5380"><PhoneIcon />Call Topsy</a>
          <a href="mailto:topsyscuisine@gmail.com">topsyscuisine@gmail.com</a>
        </div>
        <div className={styles.socialDetails}>
          <a href="https://www.facebook.com/topsyscuisine" target="_blank" rel="noreferrer" aria-label="Topsy's Cuisine on Facebook"><FacebookIcon /><span>Facebook</span></a>
          <a href="https://www.instagram.com/topsyscuisine/" target="_blank" rel="noreferrer" aria-label="Topsy's Cuisine on Instagram"><InstagramIcon /><span>Instagram</span></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>Topsy&apos;s Cuisine</div>
        <p>A taste of heaven</p>
        <a className={styles.siteCredit} href="https://neongwenya.co.za" target="_blank" rel="noreferrer">
          Website done by Neo Ngwenya
        </a>
        <p>© {new Date().getFullYear()} Topsy&apos;s Cuisine</p>
      </footer>
    </main>
  );
}
