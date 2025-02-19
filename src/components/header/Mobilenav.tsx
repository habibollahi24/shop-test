'use client';

import { ChevronDown, Menu, PhoneCall } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navList } from '@/constant';
import Link from 'next/link';

export default function Mobilenav() {
  return (
    <div className="md:hidden relative">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="md:hidden" />
        </SheetTrigger>
        <SheetContent>
          <div className="hidden">
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </div>
          <nav>
            <ul className="flex flex-col pt-12 pr-8  text-base gap-y-8 ">
              {navList.map((list) => {
                return (
                  <li
                    key={list.id}
                    className="flex items-center gap-x-1 cursor-pointer text-gray-700"
                  >
                    <Link href={list.href}>{list.text}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="absolute bottom-5 flex items-center gap-x-2">
            <PhoneCall className="text-orange-600" />
            <div className=" text-base text-gray-700">
              Mobile Number : {`${9302549198}`}{' '}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
