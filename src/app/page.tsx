import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">

      <div className="space-y-6 max-w-3xl">
        <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tighter chrome-text drop-shadow-2xl">
          Think Clear <br /> <span className="text-neon-green text-glow">Hq</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
          A digital garden for clear thinking, future-forward ideas, and exploring the intersection of design and technology.
          <br />
          <span className="block mt-4 text-sm text-neon-purple font-mono">By Srijan Bhardwaj</span>
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <Link
            href="/blog"
            className="glass-button"
          >
            Read Articles
          </Link>
          <Link
            href="/about"
            className="glass-button glass-button-primary"
          >
            About Me
          </Link>
        </div>
      </div>

    </Container>
  );
}
