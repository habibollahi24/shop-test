import { ProductType } from '@/components/AddToCartBtn';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store'

type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;

  quantity: number;
  isFav: boolean;
};

const initialState: {
  cartItems: CartItem[];
} = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductType>) {
      const currentIndex = state.cartItems.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (currentIndex >= 0) {
        state.cartItems[currentIndex].quantity++;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          isFav: false,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      const currentIndex = state.cartItems.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (state.cartItems[currentIndex].quantity === 1) {
        state.cartItems.splice(currentIndex, 1);
      } else {
        state.cartItems[currentIndex].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer;
