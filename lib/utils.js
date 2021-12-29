export function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}
export function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0];
}
export function extractVideoEntries(fetchResponse) {
  return fetchResponse?.data?.videoCollection?.items.map(
    (item) => item?.youtubeUrl
  );
}
export function extractJobEntries(fetchResponse) {
  return fetchResponse?.data?.jobCollection?.items;
}
export function extractJob(fetchResponse) {
  return fetchResponse?.data?.jobCollection?.items?.[0];
}
export function extractTeacherEntries(fetchResponse) {
  return fetchResponse?.data?.teacherCollection?.items;
}
export function extractTestimonialEntries(fetchResponse) {
  return fetchResponse?.data?.testimonialCollection?.items;
}
export function extractFacebookGalleryEntries(fetchResponse) {
  return fetchResponse?.data?.facebookGalleryCollection?.items;
}
export function extractSchoolDivisionsEntries(fetchResponse) {
  return fetchResponse?.data?.schoolDivisionCollection?.items;
}
export function extractSchoolDivision(fetchResponse) {
  return fetchResponse?.data?.schoolDivisionCollection?.items?.[0];
}
export function extractClassEntries(fetchResponse) {
  const classes = fetchResponse?.data?.classCollection?.items ?? [];
  return classes.map((item) => item?.name).sort();
}
export function extractFaqEntries(fetchResponse) {
  return fetchResponse?.data?.faqCollection?.items;
}
