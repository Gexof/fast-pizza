import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

import { Outlet, useNavigation } from "react-router";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Header />

      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <Outlet />
        </main>
      )}

      <CartOverview />
    </div>
  );
}

export default AppLayout;
