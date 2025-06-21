import Link from "next/link";

export default function Home() {
  return (
    <section className="container py-5 text-center" data-aos="fade-up">
      <h1 className="mb-4">Hi, I am Feneel Doshi</h1>
      <p className="lead mb-4">
        Full-Stack Developer passionate about building scalable web applications.
      </p>
      <Link href="/about" className="btn btn-primary btn-lg">
        Learn More About Me
      </Link>
    </section>
  );
}
