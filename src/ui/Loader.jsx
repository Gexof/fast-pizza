import { Pizza } from "lucide-react";

function Loader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-dark-bg">
      {/* Spinner */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-dark-border border-t-brand" />

        <Pizza size={34} className="text-brand" strokeWidth={2} />
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-xl font-black tracking-wide text-white">
          Preparing your <span className="text-brand">pizza...</span>
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Something delicious is coming!
        </p>
      </div>

      {/* Loading Dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="h-2 w-2 animate-bounce rounded-full bg-brand"
            style={{ animationDelay: `${dot * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export default Loader;
