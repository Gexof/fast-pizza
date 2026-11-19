import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <main className="min-h-screen bg-dark-bg px-5 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Our Menu
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Explore our <span className="text-brand">pizzas.</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-400">
            Discover our delicious selection of pizzas, made with fresh
            ingredients and baked to perfection.
          </p>
        </div>

        {/* Menu Grid */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
