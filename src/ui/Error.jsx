import { useNavigate, Link, useRouteError } from "react-router";
import { Pizza, ArrowLeft, Home } from "lucide-react";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-dark-bg px-5 py-16">
      <div className="w-full max-w-xl text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-orange-500/20 bg-orange-500/10">
          <Pizza size={48} className="text-brand" strokeWidth={1.5} />
        </div>

        <h1 className="text-8xl font-black tracking-tighter text-brand sm:text-9xl">
          {error?.status || 500}
        </h1>

        <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
          {error?.data || "Something went wrong"}
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-400">
          {error?.message ||
            "Looks like this page got lost in the oven! Don't worry, let's get you back to something delicious."}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-xl border border-dark-border bg-dark-card px-6 py-3.5 font-bold text-white transition hover:border-brand hover:text-brand active:scale-95"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-brand-hover active:scale-95"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>

        <p className="mt-12 text-sm font-medium text-gray-600">
          FAST<span className="text-brand">PIZZA</span> · Always fresh, always
          delicious.
        </p>
      </div>
    </main>
  );
}

export default Error;
