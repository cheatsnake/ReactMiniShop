const defaultState = {
    CartOverlay: false,
    CartItems: [],
}

const TOGGLE = 'TOGGLE',
      ADD_TO_CART = 'ADD_TO_CART',
      INC_ITEM_CART = 'INC_ITEM_CART',
      DEC_ITEM_CART = 'DEC_ITEM_CART'

const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE:
            return {...state, CartOverlay: !state.CartOverlay}
        case ADD_TO_CART:
            const currentId = action.payload[0].id;
            const search = state.CartItems.filter(function(item) {
                return item.id === currentId;
            })
            if (search.length) {
                search[0].count += 1;
                let newState = state.CartItems.filter(function(item) {
                    return item.id !== currentId;
                })
                return {...state, CartItems: [ ...newState, ...search]}
            } else {
                action.payload[0].count = 1;
                return {...state, CartItems: [...state.CartItems, ...action.payload]}
            }
        case INC_ITEM_CART:
            let copyState = state.CartItems;
            const indexPlus = copyState.findIndex(item => item.id === action.payload.id);
            copyState[indexPlus].count += 1;
            console.log(copyState);
            return {...state, CartItems: [...copyState]}
        case DEC_ITEM_CART:
            let newState = state.CartItems;
            const indexMinus = newState.findIndex(item => item.id === action.payload.id);
            if (newState[indexMinus].count === 1) {
                newState.splice(indexMinus, 1);
            } else {
                newState[indexMinus].count -= 1;
            }
            console.log(newState);
            return {...state, CartItems: [...newState]}
        default:
            return state;
    }
}

export default CartReducer;
export const toggleCartOverlay = (payload) => ({type: TOGGLE, payload});
export const addToCartReducer = (payload) => ({type: ADD_TO_CART, payload});
export const incItemCartReducer = (payload) => ({type: INC_ITEM_CART, payload});
export const decItemCartReducer = (payload) => ({type: DEC_ITEM_CART, payload});
