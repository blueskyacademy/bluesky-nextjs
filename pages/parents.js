import { useRouter } from "next/router";
import CTA from "../components/cta";
import Layout from "../components/layout";
import RegisterForm from "../components/register-form";
import RegisterHero from "../components/register-hero";
import { useIntl } from "react-intl";
import { useHashFragment } from "../hooks/useHashFragment";
import { getClasses, getNavigation } from "../lib/api";
import ParentGallery from "../components/parent-gallery";

const PARENTS_IMAGES = [
  "/images/parent-1.jpg",
  "/images/parent-4.jpg",
  "/images/parent-2.jpg",
  "/images/parent-3.jpg",
];
export default function Parents({ classes, navigations }) {
  const router = useRouter();
  const { formatMessage: f } = useIntl();
  const { tab } = router.query;
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <ParentGallery
        title={f({
          id: "Home.Parent",
          defaultMessage: "Parent",
        })}
        description={f({
          id: "Parent.ParentSummary",
          defaultMessage:
            "A special thank you goes out to all the parents who placed absolute trust in us by sending their children to BSA over these past 11 years. We are so grateful and blessed to be associated with the amazing parents and students here at Blue Sky Academy. We are dedicated to providing your Child with quality products and services and we could not do this without your cooperation. Thank you for allowing us to be a part of your children’s childhood. ",
        })}
        images={PARENTS_IMAGES}
      />
      <RegisterHero />
      <RegisterForm id="register" tab={tab} classes={classes} />
      <CTA hasButton={false} />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  // const testimonials = (await getTestimonials(locale)) ?? [];
  const classes = (await getClasses()) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: { classes, navigations },
    revalidate: 1,
  };
}
