import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

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
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import Image from 'next/image';
import { ProductType } from '../AddToCartBtn';
import {
  addToCart,
  removeFromCart,
} from '@/store/feature/cart-slice';

export default function ShoppingAction() {
  const dispatch = useAppDispatch();

  const [totalQuantity, setTotalQuantity] = useState(0);

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (acc, cur) =>
        cur.discount
          ? acc + (cur.price - cur.discount / 100) * cur.quantity
          : acc + cur.price * cur.quantity,
      0
    );
  }, [cartItems]);

  useEffect(() => {
    setTotalQuantity(
      cartItems?.reduce((acc, cur) => acc + cur.quantity, 0)
    );
  }, [cartItems]);

  const handleAdToCart = (product: ProductType) => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <div className="relative cursor-pointer">
            <div className="bg-red-500 absolute bottom-3 left-3 size-5 rounded-full text-white grid place-items-center text-xs">
              {totalQuantity}
            </div>
            <ShoppingCart className="cursor-pointer stroke-1" />
          </div>
        </DrawerTrigger>
        <DrawerContent className=" w-full max-h-[calc(100vh-10px)] md:w-1/2 mx-auto ">
          <div className="mx-auto w-full md:p-6 overflow-auto max-h-[calc(100vh-50px)]">
            <DrawerHeader>
              <DrawerTitle className="text-center">
                Your Cart😍
              </DrawerTitle>
            </DrawerHeader>

            {cartItems?.length === 0 ? (
              <div className="text-center text-xl">
                Your Cart Is Empty
              </div>
            ) : (
              ''
            )}
            {cartItems?.map((product) => {
              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between border-b py-4 p-2 text-xs"
                >
                  <div className="w-[100px] font-semibold truncate">
                    {product.title}
                  </div>
                  <div>
                    <p className=" text-gray-700">
                      Count :{product.quantity}
                    </p>
                    <p className=" text-gray-700">
                      Price :
                      {Intl.NumberFormat('en').format(
                        Number(
                          product.discount
                            ? (product.price -
                                product.discount / 100) *
                                product.quantity
                            : product.price * product.quantity
                        )
                      )}
                      $
                    </p>
                  </div>
                  <div>
                    <Image
                      src={product.image}
                      width={80}
                      height={80}
                      alt={product.title}
                      className=" rounded-lg"
                    />
                  </div>
                  <div className="flex items-center gap-x-1">
                    <button
                      type="button"
                      onClick={() => handleAdToCart(product)}
                      className="size-8 text-white bg-primary rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  "
                    >
                      <Plus />
                    </button>
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      type="button"
                      className="size-8 text-white bg-primary rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  "
                    >
                      {product.quantity === 1 ? (
                        <Trash className="size-5" />
                      ) : (
                        <Minus />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}

            <DrawerFooter>
              {cartItems?.length !== 0 && (
                <div className="flex items-center justify-between">
                  <div>
                    <button
                      type="button"
                      className="px-4 py-1 text-white bg-primary rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-primary"
                    >
                      Payment
                    </button>
                  </div>
                  <div>
                    Total Price:
                    {Intl.NumberFormat('en').format(
                      Number(totalPrice)
                    )}
                    $
                  </div>
                </div>
              )}

              {/* <DrawerClose asChild>
                <button>❌</button>
              </DrawerClose> */}
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
