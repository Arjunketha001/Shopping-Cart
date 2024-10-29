// context (cart, addtocart,removecart)
//provider-->gives ur react app access to all the things in context

import { Children, createContext, useState } from "react";
import { getProductData } from "./productStore";

export const cartContext=createContext({
    items:[],
    getProductQuantity:()=>{},//we cant define logic here
    addOnetoCart:()=>{},
    removeOneFromCart:()=>{},
    deleteFromCart:()=>{},
    getTotalCost:()=>{}

})

export function CartProvider({children}){
    const [cartProducts, setCartProducts]=useState([])
    // [{id: 1 ; quatity:3}]
    
    function getProductQuantity(id){
        const quantity=cartProducts.find(product=>product.id===id)?.quantity// ? is to avoid undefined.quantity
        if (quantity===undefined){
            return 0;
        }
        return quantity;
    }
    function addOnetoCart(id){
        const quantity=getProductQuantity(id);
        if (quantity===0){
            setCartProducts([...cartProducts,{id:id, quantity:1}])
        }else{
            setCartProducts(
                cartProducts.map(
                    product=>
                    product.id===id//if condition
                    //if true->take all the properties product and add 1 to product.quantity
                    ?{...product, quantity:product.quantity+1}//if true
                    :product// if false

                )
            )
        }
    }
    function deleteFromCart(id){
        setCartProducts(
            // filter --> [] if an object meets a condition, add obj to arr
            cartProducts.filter(
                product=>
                {return product.id!=id;}//if condition
            )
        )
    }
    function removeOneFromCart(id){
        const quantity=getProductQuantity(id);
        if (quantity===1){
            deleteFromCart(id)
        }else{
            setCartProducts(
                cartProducts.map(
                    product=>
                    product.id===id//if condition
                    //if true->take all the properties product and add 1 to product.quantity
                    ?{...product, quantity:product.quantity-1}//if true
                    :product// if false

                )
            )
        }

    }
    function getTotalCost(){
        let total=0
        cartProducts.map((cartItem)=>{
            const productData=getProductData(cartItem.id);
            total+=(productData.price*cartItem.quantity)
        })
        return total;

    }

    const contextValue={
        items:cartProducts,
        getProductQuantity,//we cant define logic here
        addOnetoCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    

    return (
        <cartContext.Provider value={contextValue}>
            {children}
        </cartContext.Provider>
    )

}

export default CartProvider;