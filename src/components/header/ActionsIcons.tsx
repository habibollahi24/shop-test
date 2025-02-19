'use client';

import FavAction from './FavAction';
import ShoppingAction from './ShoppingAction';
import UserAction from './UserAction';
import { SearchIcon } from 'lucide-react';

export default function ActionsIcons() {
  return (
    <div className=" flex items-center gap-x-4 text-gray-700 ">
      <FavAction />
      <SearchIcon className=" stroke-1" />
      <ShoppingAction />
      <UserAction />
    </div>
  );
}
