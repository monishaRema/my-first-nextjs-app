import styles from './page.module.css'

export default function AwesomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <span className={styles.beta}>New</span>
          <h1>
            Next.js is <span className={styles.grad}>Awesome</span>
          </h1>
          <p className={styles.subtitle}>
            Build fast, modern web apps with server components, file‑based routing,
            and first‑class developer experience.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.btnPrimary} href="#get-started">Get Started</a>
            <a className={styles.btnSecondary} href="/">Back Home</a>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Why you’ll love it</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={styles.icon}>⚡</div>
              <h3>Blazing Performance</h3>
              <p>Server rendering, streaming, and smart bundling keep things fast.</p>
            </article>
            <article className={styles.card}>
              <div className={styles.icon}>🧩</div>
              <h3>App Router</h3>
              <p>Nested layouts and file‑based routes that match how you think.</p>
            </article>
            <article className={styles.card}>
              <div className={styles.icon}>🔒</div>
              <h3>Built‑in Best Practices</h3>
              <p>Image optimization, fonts, and security right out of the box.</p>
            </article>
            <article className={styles.card}>
              <div className={styles.icon}>🛠️</div>
              <h3>DX You’ll Enjoy</h3>
              <p>Fast refresh, TypeScript support, and delightful errors.</p>
            </article>
          </div>
        </section>

        <section className={styles.quote}>
          <blockquote>
            “Once you ship with Next.js, it’s hard to go back.”
          </blockquote>
          <cite>— Every happy developer</cite>
        </section>

        <section id="get-started" className={styles.cta}>
          <h2>Ready to build something awesome?</h2>
          <p>Spin up a route, add a component, and hit refresh.</p>
          <a className={styles.btnPrimary} href="/awesome">Explore This Page</a>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>
          Built with <span className={styles.heart}>❤</span> in Next.js
        </p>
      </footer>
    </main>
  )
}
