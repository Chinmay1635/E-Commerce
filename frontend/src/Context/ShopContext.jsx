import React, { createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import Error from "../Components/Alert/Error";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i = 0; i<300+1; i++){
        cart[i] = 0;
    }
    return cart;
}



const ShopContextProvider = (props) => {

    const [all_product, setAllProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/product/all")
            .then(response => response.json())
            .then(data => setAllProduct(data.products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

        const [cartItems, setCartItems] = useState(getDefaultCart());
       
        const addToCart = (productId) => {
            setCartItems((prev) => ({  ...prev, [productId]: prev[productId] + 1 }));
            
        }

        const removeFromCart = (productId) => {
            setCartItems((prev) => {
                const cart = { ...prev };
                if (cart[productId] > 0) {
                    cart[productId] = cart[productId] - 1;
                }
                return cart;
            });
        }

        const getTotalCartAmount = () => {
            let totalAmount = 0;
            for(const item in cartItems){
                if(cartItems[item]>0){
                    let itemInfo = all_product.find((product)=>product.id === Number(item));
                    totalAmount += itemInfo.new_price*cartItems[item];
                }
            }

            return totalAmount;
        }

        const getTotalCartItems = () => {
            let total = 0;
            for(const item in cartItems){
                if(cartItems[item]>0){
                    total += cartItems[item]
                }
            }
            return total;
        }

        const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};


        return (
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        )
}

export default ShopContextProvider;