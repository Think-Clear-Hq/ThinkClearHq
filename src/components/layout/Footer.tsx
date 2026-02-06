import { Container } from "@/components/ui/Container";

export function Footer() {
    return (
        <footer className="border-t border-glass-border py-8 mt-20 bg-black/30 backdrop-blur-sm">
            <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
                    © {new Date().getFullYear()} Think Clear Hq. All rights reserved.
                </p>
                <div className="flex gap-4">
                    {/* Social links can go here later */}
                    <span className="text-xs text-gray-500">
                        Designed by Srijan Bhardwaj
                    </span>
                </div>
            </Container>
        </footer>
    );
}
