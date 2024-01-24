import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className="container">
                <Button asChild variant="ghost">
                    <Link href="/">home</Link>
                </Button>
            </div>
        </main>
    );
}
