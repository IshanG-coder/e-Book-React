export const filterReducer =(state,action) =>{
    const {type,payload} = action;

    switch(type){

        case "PRODUCT_LIST":
            return {productList : payload.products}

        case "SORT_BY":
            return{...state , sortby : payload.sortby}

        case "BEST_SELLER_ONLY":
            return{...state , bestSellerOnly : payload.bestSellerOnly}

        case "ONLY_IN_STOCK":
            return{...state , inStockOnly : payload.inStockOnly}

        case "RATINGS":
            return{...state , ratings : payload.ratings}

         case "CLEAR_FILTER":
            return{
                ...state,
                  sortby : null,
                  ratings : null,
                  bestSellerOnly : false,
                  inStockOnly : false
            }
            
            
            default:
                throw new Error("No Such Books")
    }

}