import { POSTS_PER_PAGE } from "./constant";
import {
  CLASS_GRAPHQL_FIELDS,
  FACEBOOK_GALLERY_GRAPHQL_FIELDS,
  FAQ_GRAPHQL_FIELDS,
  JOB_DETAIL_GRAPHQL_FIELDS,
  JOB_GRAPHQL_FIELDS,
  NAVIGATION_GRAPHQL_FIELDS,
  PAGES_GRAPHQL_FIELDS,
  PAGE_DETAIL_GRAPHQL_FIELDS,
  POST_DETAIL_GRAPHQL_FIELDS,
  POST_GRAPHQL_FIELDS,
  SCHOOL_DIVISIONS_GRAPHQL_FIELDS,
  SCHOOL_DIVISION_DETAIL_GRAPHQL_FIELDS,
  TEACHER_GRAPHQL_FIELDS,
  TESTIMONIAL_GRAPHQL_FIELDS,
  VIDEO_GRAPHQL_FIELDS,
} from "./query";
import {
  extractClassEntries,
  extractFacebookGalleryEntries,
  extractFaqEntries,
  extractJob,
  extractJobEntries,
  extractNavigationsEntries,
  extractPage,
  extractPagesEntries,
  extractPost,
  extractPostEntries,
  extractSchoolDivision,
  extractSchoolDivisionsEntries,
  extractTeacherEntries,
  extractTestimonialEntries,
  extractVideoEntries,
} from "./utils";

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}
export async function getTotalPostNumber() {
  const response = await fetchGraphQL(
    `query {
      postCollection {
       total
      }
    }`
  );
  const totalPosts = response.data.postCollection.total
    ? response.data.postCollection.total
    : 0;
  return totalPosts;
}
export async function getPaginatedPosts(locale, page) {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? POSTS_PER_PAGE * skipMultiplier : 0;
  const entries = await fetchGraphQL(
    `query {
      postCollection(limit: ${POSTS_PER_PAGE}, skip: ${skip},order: date_DESC, locale: "${locale}") {
        total
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  const paginatedPostSummaries = entries?.data?.postCollection
    ? entries.data.postCollection
    : { total: 0, items: [] };

  return paginatedPostSummaries;
}
export async function getAllPosts(locale) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, locale: "${locale}") {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}
export async function getAllPostsWithSlug(locale) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, locale: "${locale}") {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}
export async function getPostAndMorePosts(slug, locale) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" },locale: "${locale}", limit: 1) {
        items {
          ${POST_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC,locale: "${locale}",limit: 3) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}
export async function getPostsForHome(locale) {
  const entries = await fetchGraphQL(
    `query {
      postCollection( order: date_DESC, locale: "${locale}", limit: 4) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}
export async function getVideoForHome() {
  const entries = await fetchGraphQL(
    `query {
      videoCollection(limit: 5) {
        items {
          ${VIDEO_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractVideoEntries(entries);
}
export async function getAllJobs(locale) {
  const entries = await fetchGraphQL(
    `query {
      jobCollection( locale: "${locale}") {
        items {
          ${JOB_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractJobEntries(entries);
}
export async function getJob(slug, locale) {
  const entry = await fetchGraphQL(
    `query {
      jobCollection(where: { slug: "${slug}" },locale: "${locale}", limit: 1) {
        items {
          ${JOB_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractJob(entry);
}
export async function getTeachers(locale) {
  const entries = await fetchGraphQL(
    `query {
      teacherCollection( locale: "${locale}") {
        items {
          ${TEACHER_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractTeacherEntries(entries);
}
export async function getTestimonials(locale) {
  const entries = await fetchGraphQL(
    `query {
      testimonialCollection( locale: "${locale}") {
        items {
          ${TESTIMONIAL_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractTestimonialEntries(entries);
}
export async function getGalleries(locale) {
  const entries = await fetchGraphQL(
    `query {
      facebookGalleryCollection( locale: "${locale}") {
        items {
          ${FACEBOOK_GALLERY_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractFacebookGalleryEntries(entries);
}
export async function getAllSchoolDivisions() {
  const entries = await fetchGraphQL(
    `query {
      schoolDivisionCollection {
        items {
          ${SCHOOL_DIVISIONS_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractSchoolDivisionsEntries(entries);
}
export async function getSchoolDivision(slug) {
  const entry = await fetchGraphQL(
    `query {
      schoolDivisionCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${SCHOOL_DIVISION_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractSchoolDivision(entry);
}
export async function getClasses() {
  const entries = await fetchGraphQL(
    `query {
      classCollection {
        items {
          ${CLASS_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractClassEntries(entries);
}
export async function getFaq(l) {
  const entries = await fetchGraphQL(
    `query {
      faqCollection {
        items {
          ${FAQ_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractFaqEntries(entries);
}
export async function getAllPages() {
  const entries = await fetchGraphQL(
    `query {
      pageCollection {
        items {
          ${PAGES_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPagesEntries(entries);
}
export async function getPage(slug, locale) {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { slug: "${slug}" },locale: "${locale}", limit: 1) {
        items {
          ${PAGE_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractPage(entry);
}
export async function getNavigation() {
  const entries = await fetchGraphQL(
    `query {
      navigationCollection(order: position_ASC) {
        items {
          ${NAVIGATION_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  console.log("entries", entries);
  return extractNavigationsEntries(entries);
}
