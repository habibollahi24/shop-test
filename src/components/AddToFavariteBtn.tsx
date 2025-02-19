'use client';

import { cn } from '@/lib/utils';
import { addToFav } from '@/store/feature/fav-carts-slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { Heart } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { ProductType } from './AddToCartBtn';

export default function AddToFavariteBtn({
  product,
}: {
  product: ProductType;
}) {
  const favCartItems = useAppSelector(
    (state) => state.favCart.favCartItems
  );
  const dispatch = useAppDispatch();

  const [red, setRed] = useState<any>();

  useEffect(() => {
    setRed(favCartItems.find((cart) => cart.id === product.id));
  }, [favCartItems, product.id]);

  const AddToFavariteBtn = (product: ProductType) => {
    console.log(product);
    dispatch(addToFav(product));
  };

  return (
    <>
      <Heart
        onClick={() => AddToFavariteBtn(product)}
        className={cn(
          ' text-red-500  transition-all',
          red ? 'fill-red-500' : ''
        )}
      />
    </>
  );
}
