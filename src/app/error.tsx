"use client";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}
export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl border bg-background p-8 text-center shadow-lg sm:p-10">
        {/* Error Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <AlertCircle className="h-8 w-8 text-red-600" />
        </div>
        {/* Heading */}
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Something went wrong
        </h2>
        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
          We couldn&apos;t load this page. Something unexpected
          happened. Please try again.
        </p>
        {/* Development Error */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 overflow-hidden rounded-xl border border-red-200 bg-red-50 p-4 text-left">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-red-700">
              Development Error
            </p>

            <p className="break-words text-xs leading-5 text-red-600">
              {error.message}
            </p>
          </div>
        )}
        {/* Try Again Button */}
        <Button
          type="button"
          onClick={reset}
          className="mt-7 h-11 rounded-xl bg-green-600 px-6 font-semibold text-white shadow-sm transition-all hover:bg-green-700 hover:shadow-md"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}