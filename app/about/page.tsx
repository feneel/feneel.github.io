import { aboutText } from "../data/data";

export default function About() {
  return (
    <section className="container py-5" data-aos="fade-up">
      <h2>About Me</h2>
      <p style={{ whiteSpace: "pre-line", lineHeight: "1.8rem" }}>
        {aboutText}
      </p>
    </section>
  );
}
