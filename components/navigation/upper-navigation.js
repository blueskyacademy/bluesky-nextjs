/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
export function UpperNavigation() {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  return (
    <div className='container mx-auto bg-white'>
      <div className='flex justify-between items-center'>
        <div>
          <Link href='/'>
            <a className='inline-flex items-center'>
              <img
                src='https://www.bsa.edu.vn/assets/logo-476fe7ebc8e1d8eb9335d0f11d06637c5040a4b26d30522919086c3a21d167f5.png'
                className='h-20'
                alt='Logo'
              />
            </a>
          </Link>
        </div>

        <div className='flex flex-row-reverse'>
          <img
            className='px-2'
            style={{ height: 24, cursor: "pointer" }}
            alt='VietNam'
            src='http://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg'
            onClick={() =>
              router.push({ pathname, query }, asPath, { locale: "vi-VN" })
            }
          />
          <img
            style={{ height: 24, cursor: "pointer" }}
            alt='VietNam'
            src='http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg'
            onClick={() =>
              router.push({ pathname, query }, asPath, { locale: "en-US" })
            }
          />
          <div className='w-7/12 hidden lg:flex items-center space-x-3 border-b border-gray-200 pb-2 mr-5'>
            <div>
              <svg
                className='fill-stroke text-gray-600 dark:text-white'
                width={20}
                height={20}
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z'
                  stroke='currentColor'
                  strokeWidth='1.25'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M19.0004 19.0004L14.6504 14.6504'
                  stroke='currentColor'
                  strokeWidth='1.25'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <input
              type='text'
              placeholder='Search '
              className='bg-transparent text-sm text-gray-600 focus:outline-none'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
