import { formatCurrency } from "../../utils/helpers";
import { ShoppingCart, Flame } from "lucide-react";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li
      className={`group overflow-hidden rounded-2xl border border-dark-border bg-dark-card transition-all duration-300 hover:-translate-y-2 hover:border-brand/50 hover:shadow-xl hover:shadow-orange-500/5 ${
        soldOut ? "opacity-60" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-dark-surface">
        <img
          src={imageUrl}
          alt={name}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            soldOut ? "grayscale" : ""
          }`}
        />

        {/* Badge */}
        <div className="absolute left-4 top-4">
          {soldOut ? (
            <span className="rounded-full bg-red-500/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
              Sold Out
            </span>
          ) : (
            <span className="flex items-center gap-1 rounded-full bg-orange-500/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
              <Flame size={13} />
              Fresh
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-white transition-colors group-hover:text-brand">
          {name}
        </h2>

        <p className="mt-2 min-h-12 text-sm leading-6 text-gray-400">
          {ingredients.join(", ")}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-dark-border pt-4">
          <div>
            <p className="text-xs text-gray-500">Price</p>

            <p className="mt-1 text-xl font-black text-brand">
              {formatCurrency(unitPrice)}
            </p>
          </div>

          <button
            disabled={soldOut}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-brand px-4 text-sm font-bold text-white transition hover:bg-brand-hover active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-700"
          >
            <ShoppingCart size={17} />
            Add
          </button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
