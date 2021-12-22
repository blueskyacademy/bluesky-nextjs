import React from "react";

const Letter = ({ id }) => {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full max-w-screen-xl ml-auto bg-purple-600 rounded-l-5xl"></div>

      <img
        src="svg/dots-chaos.svg"
        className="absolute bottom-0 right-0 z-10 hidden h-auto transform 2xl:block w-80"
        alt=""
      />
      <img
        src="svg/dots-strip.svg"
        className="absolute z-10 hidden h-auto transform 2xl:block top-1 right-20 w-36"
        alt=""
      />

      <div className="relative w-full px-4 py-16 bg-purple-600 2xl:max-w-screen-xl 2xl:mx-auto 2xl:rounded-l-5xl sm:px-6 lg:pr-0 sm:py-24 lg:py-0">
        <div className="relative grid gap-12 lg:grid-cols-2 2xl:gap-4 lg:pr-10 2xl:pr-0">
          <div className="relative grid order-2 w-full max-w-2xl grid-cols-2 gap-3 mx-auto lg:order-1 sm:gap-6 lg:py-32 lg:max-w-none">
            <img
              src="svg/dots-purple-mess.svg"
              className="absolute hidden transform lg:block top-12 -right-16 2xl:right-0 "
              alt=""
            />
            <img
              src="images/dots-grid.svg"
              className="absolute top-0 hidden h-auto transform translate-y-12 right-2 w-80"
              alt=""
            />
            <div className="col-span-2 transform aspect-w-3 aspect-h-4 2xl:-translate-x-16">
              <img
                src="images/kindergarten.png"
                className="object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                alt="Program description 01"
              />
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="images/primary.png"
                  className="object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 02"
                />
              </div>
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="images/secondary.png"
                  className="object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 03"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2 lg:py-36">
            <div className="relative z-20 mx-auto prose prose-lg prose-light sm:prose-xl text-white">
              <h2 className="font-4xl text-white">Message from Principal</h2>
              <div className="text-lg leading-8 tracking-wide">
                From the day we started in June 2010 until now, June 2017, Blue
                Sky Academy has gone through an unforgettable 7-year journey.
                All school levels, including Kindergarten, Primary and Secondary
                schools, have seen numerous opportunities and challenges and
                gained great achievements along the way. <br />
                We feel very fortunate for the chance to recall such moments in
                this yearbook. Each page is a celebration of teachers and
                students, of the rst generation of BSA. Blue Sky Academy is a
                dream school for all staff , teachers, and parents. <br />
                But, most importantly, it is a limitless blue sky where students
                can let their dreams y, freely play while learning, learn while
                playing, discover their aptitudes, and develop their talents.
                Blue Sky Academy o ers a unique, integrated curriculum,
                perfectly combining the programme of Vietnam’s Ministry of
                Education and Training (MOET) with the world renowned programme
                Cambridge International Examinations (CIE).
              </div>
              <h3 className="font-2xl text-white">
                Some key guidelines for our education program are as follows:{" "}
              </h3>
              <ul className="text-lg tracking-wide">
                <li>
                  Let students at all levels explore the world around them. From
                  Primary school, students are encouraged to ask questions and
                  carry out their own research before arriving to class.
                </li>
                <li>
                  Learn by asking questions, searching for answers and writing
                  down the results.
                </li>
                <li>
                  Embrace a hollistic development, both physical and cognitive,
                  of the body and the mind.
                </li>
                <li>
                  Shape student characters in the teaching and learning of every
                  school subject, allowing them to grow in all qualities: moral,
                  intellectual, aesthetic and physical.
                </li>
                <li>
                  Ensure students know their mother tongue, so they understand
                  their motherland and the Vietnamese people. And, from an early
                  age, teach every student English as a second language so they
                  can gain access to global knowledge.
                </li>
                <li>
                  Increase practical learning of any subject through the use and
                  application of science and information technology.
                </li>
                <li>
                  Participate in all extracurricular, outdoor and social
                  activities in order to foster personality development.
                  Teachers and students never stop improving their own
                  communications skills and through the activities inside and
                  outside the classroom, they strengthen the bond among
                  themselves.
                </li>
              </ul>
              <p className="text-lg leading-8 tracking-wide">
                Blue Sky Academy will continue to post information about
                development plans, achievements on the school website
                (www.bsa.edu.vn), so parents and visitors can stay up to date on
                our progress. We are delighted to welcome all parents, teachers
                and staff as an inseparable part in the development of the Blue
                Sky Academy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
