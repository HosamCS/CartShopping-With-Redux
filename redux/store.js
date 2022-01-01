import { createStore } from "redux";

const initialState = {cart :[1,2,2,5]}

const AddToCartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD TO CART':
            return { ...state, cart:[...state.cart,action.payload] }
       }
    return state;
}

const store =createStore(AddToCartReducer);
export default store;
