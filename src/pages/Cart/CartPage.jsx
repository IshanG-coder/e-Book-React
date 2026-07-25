import {CartEmpty} from "./components/CartEmpty";
import {CartList} from "./components/CartList";

export const CartPage = () => {
 
  const listlength = 0;

  return (
   <main>
     {listlength ? <CartList /> : <CartEmpty />}
   </main>
  )
}
