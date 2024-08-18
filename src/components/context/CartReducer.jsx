
export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity, 0);
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.discountedPrice, 0);
}

const CartReducer = (state, action) => {
    switch(action.type){
        case "Add":
            return [...state, action.product]

        case "Remove":
            return state.filter((p)=> p.id !== action.id);

        case "Increase":
            const IndexIncre = state.findIndex((p)=> p.id === action.id);
            state[IndexIncre].quantity += 1;
            return [...state];

        case "Decrease":
            const IndexDecre = state.findIndex((p)=> p.id === action.id);
            state[IndexDecre].quantity -= 1;
            return [...state];

        default:
            state
    }
}

export default CartReducer;