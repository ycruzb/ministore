# Information

The demo has been developed in **React** using **Next.js**, styling with **TailwindCSS**, managing the state in **Redux** using **Redux-Toolkit** and deployed with CI/CD on **Vercel**. 

## Live demo

[https://ministore-demo.vercel.app/](https://ministore-demo.vercel.app/)

# Installation

1. Clone the repo

2. Install dependencies (must have Node.js installed) running the command inside the project folder

```bash
npm i
```

or

```bash
yarn
```

# Run the project locally

```bash
npm run dev
```

or

```bash
yarn dev
```

# Deployment

1. Update your repo on Github.

2. Sign up on [Vercel](https://vercel.com/) and follow the instructions to deploy a project from your GitHub repo, remember to config the environment variables as well.

# Testing

## Unit testing

Testing some element appearance and some reducer behaviors, using Jest and React Testing Library

```bash
npm run test
```

or

```bash
yarn test
```

## E2E testing

Testing the whole search process, from visit the page until the search result checking. (Important note: Remember to run the project locally before run e2e testing)

```bash
npm run cypress
```

or

```bash
yarn cypress
```

