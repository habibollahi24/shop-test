'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function PaginationAction({
  totalPages,
}: {
  totalPages: number;
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      pages.push(1, 2, 3, 4, 5, '...', totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages
      );
    }

    return pages;
  };
  return (
    <div>
      <div className="flex justify-start gap-2 mt-12">
        {getPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <Link
              key={index}
              href={`?page=${page}`}
              className={`text-sm size-8 flex items-center justify-center rounded-lg ${
                currentPage === page
                  ? 'bg-primary text-white'
                  : 'bg-gray-100'
              }`}
            >
              {page}
            </Link>
          ) : (
            <span key={index} className="px-2 py-2">
              ...
            </span>
          )
        )}
      </div>
    </div>
  );
}
