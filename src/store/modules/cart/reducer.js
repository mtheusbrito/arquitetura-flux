export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            // console.log('teste');
            return [...state, action.product];

        default:
            return state;
    }
}
