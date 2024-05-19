# React + TypeScript + Vite
# Online book store
# Home page
![Screenshot (16)](https://github.com/FrontLine-Code/Bookstore/assets/125187271/dcf6cda1-d4fd-408a-9f10-e1dfc197b888)
# Book details
![Screenshot (17)](https://github.com/FrontLine-Code/Bookstore/assets/125187271/21a514b5-ee16-48ae-8531-ee6bf22e5718)
# Site settings
![Screenshot (18)](https://github.com/FrontLine-Code/Bookstore/assets/125187271/954b88dc-e71d-4644-8233-a0171d319fee)
# Liked books
![Screenshot (19)](https://github.com/FrontLine-Code/Bookstore/assets/125187271/9f5824a3-c751-4ed6-b14b-8403cc12b382)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
