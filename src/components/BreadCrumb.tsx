'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BreadCrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <div className="container flex gap-x-2 mx-auto md:max-w-screen-xl 2xl:max-w-screen-2xl mt-4 md:mt-6">
      {pathSegments.length ? (
        <Link href="/" className="">
          Home
        </Link>
      ) : (
        ''
      )}
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const isLast = index === pathSegments.length - 1;
        return (
          <div key={href} className="flex items-center gap-2">
            <span> / </span>
            {isLast ? (
              <span className="text-gray-400">
                {decodeURIComponent(segment)}
              </span>
            ) : (
              <Link href={href} className="">
                {decodeURIComponent(segment)}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
