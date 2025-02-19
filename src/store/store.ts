import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './feature/cart-slice';
import { Middleware } from '@reduxjs/toolkit';
import favCartReducer from './feature/fav-carts-slice';

const localStorageMiddleware: Middleware =
  (storeAPI) => (next) => (action: any) => {
    const result = next(action);

    if (action.type?.startsWith('cart/')) {
      const cartItems = storeAPI.getState().cart.cartItems;
      localStorage.setItem('my-cart', JSON.stringify(cartItems));
    }
    if (action.type?.startsWith('fav/')) {
      const favCartItems = storeAPI.getState().favCart.favCartItems;
      localStorage.setItem('my-fav', JSON.stringify(favCartItems));
    }

    return result;
  };

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favCart: favCartReducer,
  },

  preloadedState:
    typeof window === 'undefined'
      ? { cart: { cartItems: [] }, favCart: { favCartItems: [] } }
      : {
          cart: {
            cartItems: JSON.parse(
              localStorage.getItem('my-cart') || '[]'
            ),
          },
          favCart: {
            favCartItems: JSON.parse(
              localStorage.getItem('my-fav') || '[]'
            ),
          },
        },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
