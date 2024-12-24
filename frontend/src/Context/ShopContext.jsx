import React, { createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";



export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const [all_product, setAllProduct] = useState([]);

    useEffect(() => {
        fetch("https://e-commerce-csrj.onrender.com/api/product/all")
            .then(response => response.json())
            .then(data => setAllProduct(data.products))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

        const [cartItems, setCartItems] = useState([]);
        const [loading, setLoading] = useState(true);
        const getCartItems = async () => {
            try {
              
                if(!!Cookie.get('token')){
                    const response = await fetch('https://e-commerce-csrj.onrender.com/api/cart/get', {
                        method: 'GET',
                        credentials: 'include'
                    });
                    const data = await response.json();
                    setCartItems(data.cart);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            } finally {
                
            }
        };

          useEffect(() => {
        getCartItems();
    }, []);
       
        const addToCart = (productId) => {
            const updatedCartItems = cartItems.map(item => 
                item.id === productId ? { ...item, value: item.value+1 } : item
            );
            setCartItems(updatedCartItems);
            fetch("https://e-commerce-csrj.onrender.com/api/cart/add", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ productId }),
            }).then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
        }

        const removeFromCart = (productId) => {
            const updatedCartItems = cartItems.map(item => 
                item.id === productId ? { ...item, value: item.value-1 } : item
            );
            setCartItems(updatedCartItems);
            fetch("https://e-commerce-csrj.onrender.com/api/cart/remove", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ productId }),
            }).then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
        }

        const getTotalCartAmount = () => {
            let totalAmount = 0;
            for(const item in cartItems){
                if(cartItems[item].value>0){
                    let itemInfo = all_product.find((product)=>product.id === Number(item));
                    totalAmount += itemInfo.new_price*cartItems[item].value;
                }
            }

            return totalAmount;
        }

        const getTotalCartItems = () => {
            let total = 0;
            for(const item in cartItems){
                if(cartItems[item].value>0){
                    total += cartItems[item].value;
                }
            }
            return total;
        }

        const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems, loading};


        return (
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        )
}

export default ShopContextProvider;