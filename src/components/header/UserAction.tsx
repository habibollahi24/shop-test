import { UserRound } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

export default function UserAction() {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <UserRound className="cursor-pointer stroke-1" />
        </PopoverTrigger>
        <PopoverContent>
          <div
            dir=""
            className="flex items-center justify-between gap-x-1"
          >
            <div className="text-sm text-gray-800">
              <p> Mohammad Habibollahi</p>
              <p>Habibollahi24@gmail.com</p>
            </div>
            <div className="size-12 relative aspect-square">
              <Image
                src="/images/article.jpg"
                alt="user"
                fill
                className="rounded-full object-fill"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
