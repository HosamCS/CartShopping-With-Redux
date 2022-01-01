import { createStore } from "redux";

const initialState = {cart :0}

const AddToCartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD TO CART':
            return { ...state, cart: state.cart + 1 }
        case 'REMOVE_CART':
            return { ...state, cart: state.cart = 0 }
       }
    return state;
}

const store =createStore(AddToCartReducer);
export default store;
