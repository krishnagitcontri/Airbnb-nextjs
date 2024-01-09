# NextJS - Airbnb Clone

## Objective

- Project aims to create a Airbnb clone with using NextJS.
- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

##The development process proceeded without notable architectural challenges, and the project smoothly integrated with Vercel via GitHub.



### Project Skeleton

```
nextjs-airbnb-clone (folder)
|----readme.md
SOLUTION
├── components
│    ├── Banner.jsx
│    ├── Footer.jsx
│    ├── Header.jsx
│    ├── InfoCard.jsx
│    ├── LargeCard.jsx
│    ├── MapGL.jsx
│    ├── MediumCard.jsx
│    └── SmallCard.js
├── pages
│    ├── _app.js
│    ├── _document.js
│    ├── index.js
│    └── search.js
├── public
│    └── favicon.ico
├── styles
│    └── global.css
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── yarn.lock
```

### At the end of the project, following topics are to be covered;

- HTML
- CSS
- JavaScript
- ReactJS
- NextJS
- TailwindCSS
- Geolib
- React-map-gl
- Mapbox
- Heroicons
- React-date-range

To run this project;

- Signup https://www.mapbox.com/ and create new account.  
- Copy your public token from your account page.
- Create a .env.local file and set your MAPBOX_KEY for maps and locations:

After these you can run the project as usual =>

```
$ git clone https://github.com/esadakman/nextjs-airbnb-clone.git
$ cd ./nextjs-airbnb-clone
$ npm install / yarn
$ npm run dev / yarn dev

Open http://localhost:3000 with your browser to see the result.
```

### Preview of the Project

 <img src="./airbnb-clone.gif" alt="gif"   />
 ##NOTE The Mapbox functionality may not work on other devices because the token access is tied to the local machine where the integration has been set up.
