import Header from "./Components/Layout/Header";
import React, { useState } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShow] = useState(false);

  const showCartHandlar = () => {
    setCartIsShow(true);
  };
  const hideCartHanler = () => {
    setCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHanler} />}
      <Header onShowCart={showCartHandlar} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
