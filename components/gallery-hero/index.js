const GalleryHero = () => {
  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto" data-wow-delay=".3s">
        <div className="relative">
          <h2 className="max-w-3xl mx-auto text-center text-purple-900 text-5xl font-bold">
            Our gallery
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
            et tortor at risus viverra adipiscing at in.
          </p>
        </div>

        <div className="grid grid-flow-row-dense grid-cols-2 gap-2 sm:grid-cols-3 mt-14 sm:mt-16 lg:mt-24 sm:gap-3 md:gap-4 lg:gap-6">
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
            src="images/school-grid-04.jpg"
            alt="School grid 04"
          />

          <img
            className="object-cover w-full rounded-2xl lg:h-80 h-30vw"
            src="images/school-grid-05.jpg"
            alt="School grid 05"
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
