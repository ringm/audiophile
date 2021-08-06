import NavBar from "@/root/components/shared/NavBar";
import Footer from "@/root/components/shared/Footer";

export function DefaultLayout(props) {

  const {
    children,
    cartVisibility,
    onCartVisibility,
    cartItems,
    onCartDelete,
    onCartChange } = props;

  return (
    <>
      <NavBar
        cartVisibility={cartVisibility}
        onCartVisibility={onCartVisibility}
        cartItems={cartItems}
        onCartChange={onCartChange}
        onCartDelete={onCartDelete}
      />
      {children}
      <Footer />
    </>
  )
}