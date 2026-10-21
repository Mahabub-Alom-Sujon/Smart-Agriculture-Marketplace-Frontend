import { Leaf, MessageCircle } from "lucide-react";
const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl dark:bg-green-500/10" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-500/10" />

      <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-medium text-green-700 shadow-sm transition-colors duration-300 dark:border-green-800 dark:bg-slate-900 dark:text-green-400">
            <Leaf className="h-4 w-4" />
            We&apos;re here to help
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 transition-colors duration-300 dark:text-white sm:text-5xl lg:text-6xl">
            Let&apos;s{" "}
            <span className="text-green-600 dark:text-green-400">
              Connect
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 transition-colors duration-300 dark:text-slate-300 sm:text-lg">
            Have a question about AgroNexa? Need help with the
            marketplace? Our team is ready to help farmers,
            buyers, and agricultural experts.
          </p>

          {/* Response Time */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 transition-colors duration-300 dark:text-slate-400">
            <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span>We usually respond within 24 hours.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;