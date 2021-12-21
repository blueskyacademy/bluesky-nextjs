import {
  JOB_DETAIL_GRAPHQL_FIELDS,
  JOB_GRAPHQL_FIELDS,
  POST_DETAIL_GRAPHQL_FIELDS,
  POST_GRAPHQL_FIELDS,
  TEACHER_GRAPHQL_FIELDS,
  TESTIMONIAL_GRAPHQL_FIELDS,
  VIDEO_GRAPHQL_FIELDS,
} from "./query";
import {
  extractJob,
  extractJobEntries,
  extractPost,
  extractPostEntries,
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
