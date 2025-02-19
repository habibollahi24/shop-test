'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Filter } from 'lucide-react';

export default function CategoryList({
  categories,
}: {
  categories: string[];
}) {
  const [categoryText, setCategoryText] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get('category') || '';

  useEffect(() => {
    if (categoryText) {
      router.replace(`?category=${categoryText.replace(/\s+/g, '')}`);
    }
  }, [categoryText, router]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryText(event.target.value);
    console.log(event.target.value);
  };
  const handleClear = () => {
    setCategoryText('');
    router.replace('/products');
  };

  return (
    <div className="sticky top-32">
      {/* desktop */}
      <div className=" hidden md:block sticky top-32">
        <FilterModule
          handleClear={handleClear}
          handleChange={handleChange}
          categories={categories}
          initialCategory={initialCategory}
        />
      </div>
      {/* mobile */}
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <button className="md:hidden border-2 rounded-md text-gray-400 px-4 py-1">
              Filter{' '}
              <Filter className="inline-block size-4 stroke-1" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="">
            <div className="mt-4 p-4">
              <FilterModule
                handleClear={handleClear}
                handleChange={handleChange}
                categories={categories}
                initialCategory={initialCategory}
              />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}

type Props = {
  handleClear: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categories: string[];
  initialCategory: string;
};

const FilterModule = ({
  handleClear,
  handleChange,
  categories,
  initialCategory,
}: Props) => {
  return (
    <>
      <div className="mb-4 flex items-center gap-x-4">
        <p>Category</p>
        <button
          onClick={handleClear}
          className="text-xs text-red-500 underline"
        >
          clear filter
        </button>
      </div>
      <div className=" ">
        {categories.map((cat, index) => {
          return (
            <div key={index}>
              <label
                htmlFor={cat}
                className="flex items-center mb-2 cursor-pointer"
              >
                <input
                  type="radio"
                  id={cat}
                  value={cat}
                  onChange={handleChange}
                  checked={initialCategory === cat}
                  name="cat"
                  className=" size-4 border-2 border-primary rounded-md text-primary focus:ring-primary mr-2 cursor-pointer"
                />
                <span className="capitalize">{cat}</span>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};
