# Next Starter

The aim for this starter is to give you a starting point with everything ready to work and launch to production. Web Vitals with 100% by default. Folder structure ready. Tooling ready. SEO ready. SSR ready.

[![image](/public/images/og.png)](https://next-starter-ebon.vercel.app/)

## ⚡️ Stack


- [`Next.js`](https://nextjs.org/)
- [`Typescript`](typescriptlang.org)
- [`Styled Components`](https://styled-components.com/)
- [`ESLint`](https://eslint.org/)
- [`Prettier`](https://prettier.io/)
- [`Husky`](https://github.com/typicode/husky)

## Available Scripts

- `yarn dev` Next dev
- `yarn start`: Next start
- `yarn build`: Next build
- `yarn analyze`: Generate bundle-analyzer
- `yarn lint`: Audit code quality

## 🏁 Tooling

### Absolute imports

Absolute imports working with prefix `@/` starting from `src` folder.

```json
"paths": {
  "@/*": ["src/*"],
}
```
_tsconfig.json_


### Validate staged files

On every commit, the staged files will be validated to pass ESLint config.

This is done using `husky` and `lint-staged`
```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": "eslint --cache --fix --cache-location ./node_modules/.cache/.eslintcache"
  },
```
_package.json_

### Styled Components

One common feature when using Styled Components is to use [`babel-plugin-styled-components`](https://github.com/styled-components/babel-plugin-styled-components) for improved the readability of the generated classNames, and display the fileName in the className generated.

This is done without using the plugin, by Vercel's team with the flag:

```js
styledComponents: true
```
_next.config.js_

Using this prevents the need to create a `babel.config.json`, which breaks the posibility to use SWC (Rust based and more performant) compiler for Next.js.

### Next.js Compiler

Other options added for the Next.js compiler includes removing console.* in production, adding concurrent features so Suspend just works, and reactStrictMode.

```js
compiler: {
  removeConsole: true,
  styledComponents: true,
},
experimental: {
  concurrentFeatures: true,
},
reactStrictMode: true,
```
_next.config.js_
