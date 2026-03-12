import { createContext, useState } from "react";

export const UseDetail = createContext(null);

function CartProiver({children}){
      const [selectedProduct, setSelectedProduct] = useState(null);
     
    return(
        <UseDetail.Provider value={{ selectedProduct, setSelectedProduct }}>
            {children}
        </UseDetail.Provider>
    )
}


export default CartProiver;
