import ProductsTools from '@/components/ProductsTools';
import React from 'react';

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category: string; page: string };
}) {
  return (
    <div className="container mx-auto md:max-w-screen-xl 2xl:max-w-screen-2xl mt-4 md:mt-8">
      <ProductsTools
        categoryQuery={searchParams.category}
        pageQuery={searchParams.page}
      />
    </div>
  );
}
