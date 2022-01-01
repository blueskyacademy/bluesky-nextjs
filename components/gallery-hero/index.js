import Link from "next/link";

const GalleryHero = ({
  id,
  className,
  title,
  description,
  hasButton = false,
  url,
}) => {
  return (
    <div id={id} className={className}>
      <section className="px-4 pt-12 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative">
            <h2 className="max-w-3xl mx-auto text-center text-purple-900 text-5xl font-bold">
              {title}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
              {description}
            </p>
          </div>

          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 sm:grid-cols-3 mt- sm:mt-12 lg:mt-12 sm:gap-3 md:gap-4 lg:gap-6">
            <img
              className="object-cover w-full rounded-2xl lg:h-80 h-30vw"
              alt="School grid 01"
              src="images/primary.png"
            />

            <img
              className="object-cover w-full col-span-2 rounded-2xl lg:h-80 h-30vw"
              src="images/kindergarten.png"
              alt="School grid 02"
            />

            <img
              className="object-cover w-full rounded-2xl lg:h-80 h-30vw"
              src="images/secondary.png"
              alt="School grid 03"
            />

            <img
              className="object-cover w-full rounded-2xl lg:h-80 h-30vw"
              src="images/gallery-hero-01.png"
              alt="School grid 04"
            />

            <img
              className="object-cover w-full rounded-2xl lg:h-80 h-30vw"
              src="images/gallery-hero-02.png"
              alt="School grid 05"
            />
          </div>

          {hasButton && (
            <div className="flex justify-center mt-12 sm:mt-16">
              <Link href={url}>
                <button className="text-lg font-medium text-purple-900 bg-purple-200 sm:mt-0 sm:ml-6 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:text-white hover:bg-purple-600 group">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3 text-purple-600 duration-300 ease-in-out group-hover:text-purple-50"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                  View more
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryHero;
