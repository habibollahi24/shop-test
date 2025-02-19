import { Heart } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '@/store/hooks/hooks';

import pic from '../../assets/nopic.jpg';

export default function FavAction() {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [imageError, setImageError] = useState(false);

  const favCartItems = useAppSelector(
    (state) => state.favCart.favCartItems
  );

  useEffect(() => {
    setTotalQuantity(favCartItems?.length);
  }, [favCartItems]);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative cursor-pointer">
            <div className="bg-red-500 absolute bottom-3 left-3 size-5 rounded-full text-white grid place-items-center text-xs">
              {totalQuantity}
            </div>
            <Heart className="cursor-pointer stroke-1" />
          </div>
        </PopoverTrigger>

        <PopoverContent>
          <div>
            {favCartItems.map((fav) => {
              return (
                <div
                  key={fav.id}
                  className="flex items-center justify-between"
                >
                  <div className="truncate text-xs w-[60%]">
                    {fav.title}
                  </div>
                  <div>
                    <Image
                      // src={fav.image}
                      src={imageError ? pic : fav.image}
                      onError={() => setImageError(true)}
                      alt={fav.title}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
