# Blue Sky Academy Website

This is built to display upfront on the website along with images and video footage to help paint a picture of what it is like to attend this school. It also has dedicated pages for news and events in an blog format. Students and their parents can easily find information about the school's policies, fee, class schedules and register services via form.

Contentful CMS enables BSA Admin to keep the website constantly updated with editing blog post tools to add new content.

This project was included two parts:

|         | Link access                 | Technologies                                         | Notes |
| ------- | --------------------------- | ---------------------------------------------------- | ----- |
| Website | https://www.bsa.edu.vn/     | Next.js, GraphQL, Google Drive API, Google Sheet API |       |
| Admin   | https://app.contentful.com/ | Contentful CMS                                       |       |

## Technologies

- [React v17.0](https://reactjs.org/)
- [Next.js v12.0](https://nextjs.org/)
- [TailwindCSS v.3.0](https://tailwindcss.com/)
- [Contentful CMS](https://www.contentful.com/)
- [Google Drive API](https://developers.google.com/drive)
- [Google Sheet API](https://developers.google.com/sheets/api)

## Table of Content:

- [About The App](#about-the-app)
- [Setup](#setup)
- [Structure](#structure)
- [Features](#features)

## About The App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

1. Firstly, install all dependencies

```bash
npm install
```

2. Secondly, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

There are some sub-folders:

```
/public
    /images
    /svg
/components
/helpers
/hooks
/libs
/middlewares
/translations
    en.json
    vn.json
/pages
    /api
    _app.js
    _document.js
    404.js
    about.js
    admission.js
    apply.js
    contact.js
    gallery.js
    handbook.js
    index.js
    verify.js
    gallery.js
    handbook.js
    index.js
    ....
    /posts
        index.js
        [slug].js
        /page
            [page].js
    /programs
        index.js
        [slug].js
    /recruitment
        index.js
        [slug].js
    ....
```

#### Folder `public` includes:

- `svg` folder: includes svg files ...
- `images` folder: includes images .jpg, .png, .jpeg ...

#### Node.js Backend in Next.js project:

- `api` folder: Files in this directory are treated as API routes instead of React pages. These are routes for server to call Google Drive / Google Sheet API
- `middleware` folder: To work with file uploads in Next.js and using API Routes, we can add a middleware to parse a multipart-form.

## Deploy on Vercel

The easiest way to deploy Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

1. `bluesky-nextjs` is a public code project. So to deploy to Vercel free, we will fork this project and deploy it to vercel.
2. Import the repo to vercel. After forking the repo, we can import the project to vercel to deploy.
