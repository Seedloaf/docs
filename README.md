# Seedloaf Documentation

## Getting Started

1. Install dependencies

```
npm install
```

2. Run the dev server

```
npm run dev
```

3. Build for production

```
npm run build
```

## Setup Algolia DocSearch

1. Create an account on [Algolia DocSearch](https://docsearch.algolia.com/)
2. Add your website
3. Create a `.env` file in the root directory
4. Add your Algolia DocSearch API details to the `.env` file like this:

```
VITE_ALGOLIA_APP_ID=XXXXXXXXXX
VITE_ALGOLIA_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_ALGOLIA_INDEX_NAME=xxxxxxxx
```
