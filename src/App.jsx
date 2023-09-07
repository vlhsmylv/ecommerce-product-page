import {
  CartOverlay,
  MenuOverlay,
  LightboxOverlay,
  Navbar,
  Product,
  Footer,
} from "./components";

const App = () => {
  return (
    <main>
      <MenuOverlay />
      <LightboxOverlay />
      <CartOverlay />
      <Navbar />
      <Product />
      <Footer />
    </main>
  );
};

export default App;
