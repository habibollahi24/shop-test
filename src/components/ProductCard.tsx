'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import AddToCartBtn from './AddToCartBtn';
import { Heart, HeartIcon, StarIcon } from 'lucide-react';
import AddToFavariteBtn from './AddToFavariteBtn';
import Link from 'next/link';

import pic from '../assets/nopic.jpg';

type Props = {
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

export default function ProductCard({
  id,
  image,
  price,
  title,
  discount,
  ...rest
}: Props) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative p-4 shadow-lg rounded-xl cursor-pointer hover:shadow-xl transition-all group">
      {/* discount */}
      {discount && (
        <div className="absolute z-10 text-secondary bg-secondary/10 left-0  p-1 text-sm rounded-e-md">
          {-discount}%
        </div>
      )}
      <Link href={`/products/${id}`}>
        <div className="relative aspect-square w-[80px] md:w-[150px] mx-auto mb-8  border-b-2 ">
          <Image
            src={imageError ? pic : image}
            onError={() => setImageError(true)}
            alt={title}
            fill
            className="object-contain  md:pb-4 w-3/4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
      <Link href={`/products/${id}`}>
        <p className="font-semibold text-gray-600 text-sm  truncate">
          {title}
        </p>
      </Link>
      <div className="md:group-hover:hidden flex items-end justify-between mt-8  text-gray-600">
        <div className="flex-col items-center justify-between   text-gray-600">
          {discount ? (
            <>
              <p className="text-sm line-through">${price}</p>
              <p className="font-semibold">
                ${price - discount / 100}
              </p>
            </>
          ) : (
            <p className="font-semibold">${price}</p>
          )}
        </div>
        <div className="text-sm text-primary">
          <StarIcon className="stroke-1 size-5 stroke-primary fill-primary" />
          4.5
        </div>
      </div>
      <div className="md:hidden flex md:group-hover:flex items-center justify-between mt-8  text-gray-600 ">
        <AddToCartBtn
          product={{ id, image, price, title, discount, ...rest }}
        />
        <div>
          {/* <HeartIcon className="stroke-1" /> */}
          <AddToFavariteBtn
            product={{ id, image, price, title, discount, ...rest }}
          />
        </div>
      </div>
    </div>
  );
}
