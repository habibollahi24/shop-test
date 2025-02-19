import React from 'react';
import ProductCard from './ProductCard';
import { ProductType } from './AddToCartBtn';
import CategoryList from './CategoryList';
import PaginationAction from './PaginationAction';

export default async function ProductsTools({
  categoryQuery,
  pageQuery,
}: {
  categoryQuery: string;
  pageQuery: string;
}) {
  const res = await fetch(
    categoryQuery
      ? `https://fakestoreapi.in/api/products/category?type=${categoryQuery}`
      : `https://fakestoreapi.in/api/products?page=${
          pageQuery || 1
        }&limit=15`,
    { cache: 'no-cache' }
  );
  const { products } = (await res.json()) as {
    products: ProductType[];
  };

  const catRes = await fetch(
    'https://fakestoreapi.in/api/products/category'
  );

  const { categories } = (await catRes.json()) as {
    categories: string[];
  };

  return (
    <div className="grid grid-cols-12 my-8 md:gap-8">
      <div className=" col-span-12 md:col-span-3  ">
        <CategoryList categories={categories} />
      </div>
      <div className="col-span-12 md:col-span-9">
        <div className="grid grid-cols-12 gap-3 md:gap-6">
          {products?.map((product) => {
            return (
              <div
                key={product.id}
                className="col-span-6 md:col-span-4 "
              >
                <ProductCard {...product} />
              </div>
            );
          })}
        </div>
        <PaginationAction totalPages={10} />
      </div>
    </div>
  );
}
