import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
    return (
        <Container className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h2 className="text-8xl font-black font-heading text-[#111] absolute z-0 select-none">404</h2>
            <div className="z-10 relative space-y-4">
                <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
                <p className="text-gray-400 max-w-md mx-auto">
                    The page you're looking for has dissolved into the ether.
                    It might have been moved or never existed.
                </p>
                <Link
                    href="/"
                    className="inline-block mt-4 px-6 py-2 rounded-full border border-neon-green/30 text-neon-green hover:bg-neon-green/10 transition-colors"
                >
                    Return Home
                </Link>
            </div>
        </Container>
    );
}
