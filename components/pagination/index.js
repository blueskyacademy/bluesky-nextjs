import Link from "next/link";

const Pagination = ({ totalPages, currentPage }) => {
  const prevPageUrl =
    currentPage == "2"
      ? "/posts"
      : `/posts/page/${parseInt(currentPage, 10) - 1}`;
  const nextPageUrl = `/posts/page/${parseInt(currentPage, 10) + 1}`;
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;

  return (
    <div className="bg-white py-3 flex items-center justify-between border-t border-gray-200">
      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-end">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {prevDisabled && (
              <div className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500">
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
              </div>
            )}
            {!prevDisabled && (
              <Link href={prevPageUrl}>
                <a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-purple-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 17l-5-5m0 0l5-5m-5 5h12"
                    />
                  </svg>
                </a>
              </Link>
            )}

            {pageNumbers.map((number) => (
              <Link
                key={`pagination-${number}`}
                href={
                  number == "1"
                    ? `/posts`
                    : `/posts/page/${parseInt(number, 10)}`
                }
              >
                <a
                  className={
                    currentPage == number
                      ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  }
                >
                  {number}
                </a>
              </Link>
            ))}
            {nextDisabled && (
              <div className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500">
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            )}
            {!nextDisabled && (
              <Link href={nextPageUrl}>
                <a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-purple-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
