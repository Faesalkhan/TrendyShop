import React, { createContext } from "react";
import all_products from "./Assets/all_product";

export const shopContext = createContext(null);
const ShopContextProvider = (props) => {
  const contextValue = { all_products };
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
export default ShopContextProvider;
