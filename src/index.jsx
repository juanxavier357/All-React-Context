import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// import { createContext, useReducer, useContext } from 'react';

// const AppStateContext = createContext();

// const initialState = {
//     individualVotes: 0,
//     allVotes: 0,
//     percentage: 0,
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'SET_LOADING': {
//             return { ...state, isLoading: action.payload };
//         }
//         case 'SET_PRODUCTS': {
//             return { ...state, products: action.payload };
//         }
//         case 'ADD_TO_CART': {
//             const newProduct = action.payload;
//             const newCart = [...state.cart, newProduct];
//             const total = newCart.reduce((acc, curr) => acc + curr.price, 0);

//             return { ...state, cart: newCart, total };
//         }

//         default: {
//             throw new Error(`Unhandled action type: ${action.type}`);
//         }
//     }
// }

// export const AppProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const voting = { state, dispatch };

//     return (
//         <AppStateContext.Provider value={voting}>
//             {children}
//         </AppStateContext.Provider>
//     );
// };

// export const useAppState = () => {
//     const context = useContext(AppStateContext);

//     if (context === undefined) {
//         throw new Error('useAppState must be used within a AppProvider');
//     }

//     return context;
// }