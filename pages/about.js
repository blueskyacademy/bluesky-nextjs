import Certificate from "../components/certificate";
import Cover from "../components/cover";
import Cofounders from "../components/founders";
import Hero from "../components/hero";
import Intro from "../components/intro";

import Layout from "../components/layout";
import Letter from "../components/letter";
import Mission from "../components/mission";
import Values from "../components/values";
import Vision from "../components/vision";
import { useHashFragment } from "../hooks/useHashFragment";

export default function About() {
  useHashFragment();
  return (
    <Layout>
      <Cover heading='Message from our BSA Executive Chairman' description='' />
      <Letter id='letter' />
      <Intro
        id='introduction'
        heading='INTRODUCTION'
        description='From the day we started in June 2010 until now, June 2017, Blue Sky Academy has gone through an unforgettable 7-year journey. All school levels, including Kindergarten, Primary and Secondary schools, have seen numerous opportunities and challenges and gained great achievements along the way'
      />
      <Certificate id='accredition' />
      <Vision
        id='vision'
        image='https://i.imgur.com/Chvw0rN.jpg/'
        heading='BSA Vission'
        content='Blue Sky Academy was established to build a world-class education system that is both innovative and standardized across all levels of education, from kindergarten to high school. is vision was based on the modern educational philosophy that a foundation of scientific research, humane value and the long-lasting values of Vietnam can further enhance our students’ education.'
      />

      <Mission heading='BSA Mission' id='mision' />

      <Values
        id='core'
        heading='BSA Core Values'
        subHeading='Blue Sky Academy’s education system is based on UNESCO’s Four Pillars of Learning'
      />
      <Cofounders
        id='cofounder'
        heading='BSA Founders'
        subHeading='Blue Sky Academy’s cofounders'
      />
    </Layout>
  );
}
