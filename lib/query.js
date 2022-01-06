export const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
excerpt
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
export const TESTIMONIAL_GRAPHQL_FIELDS = `
parent
photo{
  url
}
description
content
`;
export const FACEBOOK_GALLERY_GRAPHQL_FIELDS = `
title
link
image{
  url
}
`;
export const SCHOOL_DIVISIONS_GRAPHQL_FIELDS = `
name
slug
`;
export const SCHOOL_DIVISION_DETAIL_GRAPHQL_FIELDS = `
slug
name
coverImage {
  url
}
summary
description {
  json
}
reasonsCollection{
  items{
    ... on Reason{
      content
    }
  }
}
statsCollection{
  items{
    ... on Stat{
      label
      value
    }
  }
}
teachersCollection{
  items{
    ... on Teacher{
      name
      role 
      photo{
        url
      }
    }
  }
}
classesCollection{
  items{
    ... on Class{
      name
      image{
        url
      }
      description
    }
  }
}
`;
export const CLASS_GRAPHQL_FIELDS = `
name
`;
export const FAQ_GRAPHQL_FIELDS = `
question
answer
`;
