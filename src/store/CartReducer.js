const defaultState = {
    CartOverlay: false,
}

const TOGGLE = 'TOGGLE'

const CartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE:
            return {...state, CartOverlay: !state.CartOverlay}
        default:
            return state;
    }
}

export default CartReducer;
export const toggleCartOverlay = (payload) => ({type: TOGGLE, payload});
