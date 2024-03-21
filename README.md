# eslint, prettier 적용 참고 링크

https://velog.io/@nudge411/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%97%90%EC%84%9C-ESlint-%EC%99%80-prettier-%EC%9E%AC%EC%84%A4%EC%A0%95-%ED%95%B4%EB%B2%84%EB%A6%AC%EA%B8%B0..-%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B8%B0%EB%A1%9D

1. npm install -D prettier
2. npm install -D prettier eslint-config-prettier eslint-plugin-prettier
3. .eslintrc
   {
   "extends": ["plugin:prettier/recommended"]
   }
4. .eslintrc.js
   module.exports = {
   env: {
   browser: true,
   node: true,
   },
   root: true,
   parser: "@typescript-eslint/parser",
   plugins: ["@typescript-eslint"],
   extends: [
   "eslint:recommended",
   "plugin:@typescript-eslint/recommended",
   "plugin:prettier/recommended",
   ],
   rules: {
   "no-extra-semi": "error",
   },
   globals: {},
   ignorePatterns: [],
   };
5. setting.json
   {
   "editor.codeActionsOnSave": {
   "source.fixAll.eslint": true
   },
   }
6. .prettierrc
   {
   "tabWidth": 2,
   "useTabs": false,
   "singleQuote": true,
   "jsxSingleQuote": true,
   "semi": true,
   "arrowParens": "avoid",
   "trailingComma": "es5",
   "minItems": 0,
   "printWidth": 140
   }
7. package.json
   "scripts": {
   "lint": "eslint --fix ./src"
   },

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
