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
};

const initialState: {
  favCartItems: CartItem[];
} = {
  favCartItems: [],
};

export const favCartSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav(state, action: PayloadAction<ProductType>) {
      const currentIndex = state.favCartItems.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (currentIndex >= 0) {
        state.favCartItems.splice(currentIndex, 1);
      } else {
        state.favCartItems.push({
          ...action.payload,
        });
      }
      //   if (state.favCartItems[currentIndex].isFav) {
      //     state.favCartItems[currentIndex].isFav = false;
      //   } else {
      //     state.favCartItems[currentIndex].isFav = true;
      //   }
    },
  },
});

export const { addToFav } = favCartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default favCartSlice.reducer;
