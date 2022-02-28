import { useRouter } from "next/router";
import Layout from "../components/layout";
import Step from "../components/step";
import { useHashFragment } from "../hooks/useHashFragment";
import CTA from "../components/cta";
import RegisterForm from "../components/register-form";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { getNavigation, getSteps, getClasses } from "../lib/api";
import AdmissionIntro from "../components/admission-intro";

export default function Admission({ navigations, steps, classes }) {
  const router = useRouter();
  const { tab } = router.query;
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <AnimationRevealPage>
        <AdmissionIntro />
        <RegisterForm id="register" tab={tab} classes={classes} />
        <Step id="apply" steps={steps} />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  const classes = (await getClasses()) ?? [];
  const steps = (await getSteps(locale)) ?? [];
  return {
    props: { navigations, steps, classes },
    revalidate: 1,
  };
}
