const defaultState = {
    CartOverlay: false,
    CartItems: [],
}

const TOGGLE = 'TOGGLE',
      ADD_TO_CART = 'ADD_TO_CART';

const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE:
            return {...state, CartOverlay: !state.CartOverlay}
        case ADD_TO_CART:
            return {...state, CartItems: [...state.CartItems, ...action.payload]}
        default:
            return state;
    }
}

export default CartReducer;
export const toggleCartOverlay = (payload) => ({type: TOGGLE, payload});
export const addToCartReducer = (payload) => ({type: ADD_TO_CART, payload});
