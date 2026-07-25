import {createContext,useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filterReducer";

const filterInitialState ={
    productList : [],
    sortby : null,
    ratings : null,
    bestSellerOnly : false,
    inStockOnly : false
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) =>{

   const[state,dispatch]=useReducer(filterReducer,filterInitialState);

   function initialTotalProduct(products){
    dispatch({
     type : "PRODUCT_LIST",
     payload : {
        products:products
     }
    });
   }

   function bestSeller(products){
    return state.bestSellerOnly ? products.filter((product) => product.best_seller === true) : products ;
   }

   function inStock(products){
    return state.inStockOnly ? products.filter((product)=>product.in_stock === true ) : products ;
   }

   function sort(products){
    if(state.sortby === "lowtohigh"){
       return products.sort((a,b)=>Number(a.price) - Number(b.price));
    }
    if(state.sortby === "hightolow"){
       return products.sort((a,b)=>Number(b.price) - Number(a.price));
    } 
    return products;
   }

   function rating(products){
    if(state.ratings === "4STARABOVE"){
        return products.filter(product => product.rating >= 4);
    }
    if(state.ratings === "3STARABOVE"){
        return products.filter(product => product.rating >= 3);
    }
    if(state.ratings === "2STARABOVE"){
        return products.filter(product => product.rating >= 2);
    }
    if(state.ratings === "1STARABOVE"){
        return products.filter(product => product.rating >= 1);
    }
    return products;
   }

   const filterProductList = rating(sort(inStock(bestSeller(state.productList))));

    const value ={
        state,
        dispatch,
        products : filterProductList,
        initialTotalProduct
    }
   
    return(
          <FilterContext.Provider value={value} >
             {children}
            </FilterContext.Provider>
    )
}

export const useFilter = ()=>{
    const context = useContext(FilterContext);
    return context;
}