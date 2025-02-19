import { ProductType } from '@/components/AddToCartBtn';
import React from 'react';

export default async function SingleProduct({
  params,
}: {
  params: { productId: string };
}) {
  const res = await fetch(
    `https://fakestoreapi.in/api/products/${params.productId}`,

    { cache: 'no-cache' }
  );
  const { product } = (await res.json()) as {
    product: ProductType;
  };

  return (
    <div className="container mx-auto md:max-w-screen-xl 2xl:max-w-screen-2xl mt-4 md:mt-12">
      {product.title}
    </div>
  );
}
