import { createStore } from "redux";

const initialState = {count : 0, total : 0 , cart :[] , productCount:1}  //total cost of all items in cart

const AddToCartReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD TO CART':
          const index = state.cart.findIndex(item => item.title === action.payload.title);//check if item already in cart
            if(index !== -1){
                const newCart = [...state.cart];
                newCart[index].count += 1;
                return {...state, cart : newCart};
              }
              let newArray = [ ...state.cart, {... action.payload,productCount:1 },] 
              let count = newArray.length
            return {
                  cart : newArray,
                  count, //count all items in cart
                  total : state.total + action.payload.cost, // 0+20+50 => 70+10 = 80
                }
        case 'EMPTY_CART':
            return{
              cart : [],
              total: 0,
              count :0
            } 
        
          case 'REMOVE_ITEM':
            let arr2 = state.cart
            let m = 0 ;
            for(let i=0 ;i<arr2.length;i++){
              m += arr2[i].cost
            }
            return{
              ...state,
              cart: arr2.filter((item,index)=>index !== action.payload.index),
              total : m - state.cart[action.payload.index].cost,
              count : state.count - 1
            }  
            
         case 'INCREMENT':
           let arr = state.cart
           arr[action.payload.index].productCount+=1
           //  for loop to claculate total cost of all items in cart
           let t =0;
           for(let i=0 ;i<arr.length;i++){
              t += arr[i].cost * arr[i].productCount
           }
           return{
             ...state,
             cart : arr,
             total :t
           }   

         case 'DECREMENT': 
         let arr1 = state.cart
          if(arr1[action.payload.index].productCount === 1){
            return {...state}
          }
          else{
            arr1 [action.payload.index].productCount-=1
          }
       
          let b =0;
          for(let i=0 ;i<arr1.length;i++){
             b+=arr1[i].cost * arr1[i].productCount
           }
         return{
            ...state,
            cart : arr1,
            total :b
         }  
      } 
    return state;
}

const store = createStore(AddToCartReducer);
export default store;
