import { Container } from "@/components/ui/Container";

export default function About() {
    return (
        <Container className="py-20">
            <div className="max-w-prose mx-auto space-y-8">
                <h1 className="text-4xl font-heading font-bold mb-8 text-white">About Me</h1>

                <div className="glass-panel p-8 rounded-2xl space-y-6 text-gray-300 leading-relaxed">
                    <p>
                        Hello, I&apos;m <span className="text-neon-green font-medium">Srijan Bhardwaj</span>.
                    </p>
                    <p>
                        I build digital experiences that live at the intersection of design, technology, and philosophy.
                        <strong>Think Clear Hq</strong> is my personal playground—a space to document my learning,
                        share my thoughts, and experiment with new web technologies.
                    </p>
                    <p>
                        My work focuses on creating intuitive, high-performance applications that don't just work well
                        but feel "right". I believe in the power of clear thinking to solve complex problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="glass-panel p-6 rounded-xl">
                        <h3 className="text-xl font-heading text-white mb-4">Tech Stack</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                            <li>Next.js / React</li>
                            <li>TypeScript</li>
                            <li>Tailwind CSS</li>
                            <li>Node.js / Python</li>
                        </ul>
                    </div>
                    <div className="glass-panel p-6 rounded-xl">
                        <h3 className="text-xl font-heading text-white mb-4">Interests</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-400">
                            <li>System Design</li>
                            <li>UI/UX Engineering</li>
                            <li>Artificial Intelligence</li>
                            <li>Philosophy of Mind</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
}
