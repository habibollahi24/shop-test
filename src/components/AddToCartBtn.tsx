'use client';

import { PlusSquare } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks/hooks';
import { addToCart } from '@/store/feature/cart-slice';
import { useToast } from '@/hooks/use-toast';

export type ProductType = {
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

export default function AddToCartBtn({
  product,
}: {
  product: ProductType;
}) {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleAddToCart = (product: ProductType) => {
    dispatch(addToCart(product));
    toast({
      description: 'One Product Add To Cart',
      className: 'text-center',
    });
  };

  return (
    <div>
      <button
        onClick={() => handleAddToCart(product)}
        className="text-xs md:text-base whitespace-nowrap border-2 rounded-md py-2 px-1 md:px-4 hover:bg-gray-100"
      >
        Add To Cart
      </button>
    </div>
  );
}
