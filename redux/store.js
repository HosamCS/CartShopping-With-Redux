import { createStore } from "redux";

const initialState = {count : 0, total : 0 , cart :[]}  //total cost of all items in cart

const AddToCartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD TO CART':
          const index = state.cart.findIndex(item => item.title === action.payload.title);//check if item already in cart
            if(index !== -1){
              const newCart = [...state.cart];
              newCart[index].count += 1;
              return {...state, cart : newCart};
            }
            let newArray = [ ...state.cart, action.payload]
            let count = newArray.length
         
            return {
              
                cart : newArray,
                count, //count all items in cart
                total : state.total + action.payload.cost, // 0+20+50 = 70
             }
         }
    return state;
}

const store = createStore(AddToCartReducer);
export default store;
