import { useRouter } from "next/router";
import Layout from "../components/layout";
import Step from "../components/step";
import { useHashFragment } from "../hooks/useHashFragment";
import CTA from "../components/cta";
import RegisterForm from "../components/register-form";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { getNavigation, getSteps, getClasses, getFaq } from "../lib/api";
import AdmissionIntro from "../components/admission-intro";
import Faq from "../components/faq";

export default function Admission({ navigations, steps, classes, faq }) {
  const router = useRouter();
  const { tab } = router.query;
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <AnimationRevealPage>
        <AdmissionIntro />
        <RegisterForm id="register" tab={tab} classes={classes} />
        <Step id="apply" steps={steps} />
        <Faq faq={faq} id="faq" />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  const classes = (await getClasses()) ?? [];
  const steps = (await getSteps(locale)) ?? [];
  const faq = (await getFaq(locale)) ?? [];
  return {
    props: { navigations, steps, classes, faq },
    revalidate: 1,
  };
}
