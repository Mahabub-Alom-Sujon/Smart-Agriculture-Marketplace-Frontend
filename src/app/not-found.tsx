import Link from "next/link";
import { Home, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="max-w-md text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <SearchX className="h-8 w-8 text-muted-foreground" />
                </div>
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="mt-4 text-2xl font-semibold">
                    Page Not Found
                </h2>
                <p className="mt-2 text-muted-foreground">
                    Sorry, the page you're looking for doesn't exist
                    or may have been moved.
                </p>
                <Button
                    //asChild
                    className="mt-6 h-11 rounded-xl bg-green-600 px-6 font-semibold text-white shadow-sm transition-all hover:bg-green-700 hover:shadow-md"
                >
                    <Link href="/" className="inline-flex items-center gap-2">
                        <Home className="h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}