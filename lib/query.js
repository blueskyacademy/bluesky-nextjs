export const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
excerpt
content {
  json
}
`;
export const POST_DETAIL_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
excerpt
content {
  json
  links {
    assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
  }
}
`;
export const VIDEO_GRAPHQL_FIELDS = `
title
youtubeUrl
`;
export const JOB_GRAPHQL_FIELDS = `
title
slug
introduction
start
expire
`;
export const JOB_DETAIL_GRAPHQL_FIELDS = `
title
slug
introduction
start
expire
requirement
benefit
`;
export const TEACHER_GRAPHQL_FIELDS = `
name
role
photo{
  url
}
deparment
`;
