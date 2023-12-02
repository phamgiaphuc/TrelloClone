# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Yarn commands
1. yarn dev (--host)
2. yarn build
  - parameters: base = "./"
    + vite.config.js: base: "./"
    + package.json: "build": "vite build --base=./"
3. yarn preview
4. yarn add "dependency"
5. yarn remove "dependency"@"version"
6. yarn lint

--> Orders of Yarn commands when build a production: yarn lint -> yarn build -> yarn preview

# React
[React Tutorial](https://react.dev/learn)

# Vite
[Vite Guide](https://vitejs.dev/guide/)

# .js VS .jsx
1. [ReactJS - .JS vs .JSX](https://stackoverflow.com/questions/46169472/reactjs-js-vs-jsx)
2. [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react#basic-rules)

# Semantics Versioning
[Semantic Versioning](https://www.geeksforgeeks.org/introduction-semantic-versioning/)

# ESlint
[ESlint rules](https://eslint.org/docs/latest/)

# Material UI - MUI
[MUI docs](https://mui.com/material-ui/getting-started/templates/)

# React Boostrap
[React Boostrap docs](https://react-bootstrap.netlify.app/docs/components/accordion)

# Tailwind CSS React UI
[Tailwind CSS docs](https://tailwindcss.com/docs/installation)

# Github
- Upload second change to the first commit 

1. git status
2. git add .
3. git commit -m "<message>" --amend
4. git push (origin) ("<branch_name>") -f 