# Aircnc

## Full Stack Hotel booking application with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth
It's a Hotel booking website where you can book hotel rooms online from anywhere. This is mainly developed with typescript, Next.js, Next Auth, Prisma, Tailwind etc. Backend work has been done with the help of Prisma. MongoDB is Used as for data storage. Authentication can also be done with Google sign in & GitHub sign in.


![Aircnc](https://github.com/masrur-sakib/aircnc/assets/38833172/8abfbc0a-9f00-4049-bacd-756a4d6a8bab)

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
  - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
  - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/masrur-sakib/aircnc.git
```

### Install packages

```shell
npm i or npm install
```

### Setup .env file

```js
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_SECRET=

GITHUB_CLIENT_ID=
GITHUB_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

### Project Links:

<a  target="_blank" href="https://aircnc-9cx8xsid7-masrur-sakib.vercel.app/">Live Site Link</a>

