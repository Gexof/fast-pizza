import { Link } from "react-router";
import { ArrowRight, Flame, Clock, Star } from "lucide-react";

function Home() {
  return (
    <main className="overflow-hidden">
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 lg:px-8">
        {/* Hero Content */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-500">
            <Flame size={16} />
            FRESH, HOT & DELICIOUS
          </div>

          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            The best
            <span className="block text-orange-500">pizza.</span>
            <span className="mt-3 block text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Straight out of the oven,
              <span className="text-gray-400"> straight to you.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-400">
            Experience the perfect combination of fresh ingredients, crispy
            crust, and unforgettable flavors.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore Menu
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/order/lookup"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-white transition hover:border-orange-500 hover:text-orange-500"
            >
              Track Order
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            <div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-orange-500" />
                <span className="text-2xl font-black text-white">30 min</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">Fast Delivery</p>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Star size={18} className="fill-orange-500 text-orange-500" />
                <span className="text-2xl font-black text-white">4.9/5</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-orange-500/20 blur-[100px] sm:h-96 sm:w-96" />

          <div className="relative aspect-square w-full max-w-[520px]">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=1000"
              alt="Fresh delicious pizza"
              className="h-full w-full rounded-full object-cover shadow-2xl shadow-orange-500/20"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-3 -left-3 rounded-2xl border border-white/10 bg-[#202630] p-4 shadow-xl sm:-left-8">
              <p className="text-xs font-medium text-gray-400">Made with</p>
              <p className="mt-1 text-lg font-black text-white">
                ❤️ Love & Freshness
              </p>
            </div>

            <div className="absolute -right-3 top-8 rounded-2xl border border-white/10 bg-[#202630] p-4 shadow-xl sm:-right-8">
              <p className="text-xs text-gray-400">Starting from</p>
              <p className="text-2xl font-black text-orange-500">$9.99</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
