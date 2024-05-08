# Taiyo.AI Assignment - Front End Engineer

> Frontend Engineer Coding Task

This is a contact management app with Charts and Maps using ReactJS, TypeScript,
TailwindCSS, React Router v6 and React Query aka TanstackQuery.

Improvements are by no means exhaustive and are in no particular order.

<!-- toc -->

- [API Used](#api-used)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies after cloning](#install-dependencies-after-cloning)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
- [Improvements](#improvements)

## API Used

https://disease.sh/

Country Specific data of cases: [link](https://disease.sh/v3/covid-19/countries) (used in map).
Graph data for cases with date:
[link](https://disease.sh/v3/covid-19/historical/all?lastdays=all) (used in line chart).

## Usage

### Env Variables

REACT_APP_ENV -> `development | production`

### Install Dependencies after cloning

```
npm install
```

### Run

```
npm start
```

## Build & Deploy

### Create frontend production build

```
npm run build
```

## Improvements

- Shimmer UI instead of plain loading text, would enhance user experience.

- Server Side Rendering on List Page (Main page) can take the burden off the client and improve performance.

- Introduce Auth in this app so that users can login and save contacts either on server or in localstorage. Optimistic UI updates can be implemented to enhance user experience.

- Scalability -> Because the risk of rendering a large DOM size is high, we can use "virtualized lists" within a container of limited height so that only the visible contacts are rendered.

- Accessiblity -> Implementing ARIA attributes and roles can provide inclusive experience for people using screen-readers and performing keyboard interactions.

- Preloading images, responsive images via srcSet attribute can also improve user experience.

- Code splitting is not evident at this stage of development, but if the app ever gets bigger, it will also make sense to use React.lazy() and React Suspense to dynamically import components on-demand.

- Add unit-tests and RTL DOM tests, include appropriate logging levels and implement this app as a PWA or SSR using Remix.js or NextJS.
