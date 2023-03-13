## React Babel Webpack, lint, prettier Setup From Scratch ##
Step 1: Creating an git repo
Step 2: Initializing a basic web project
Step 3 : Adding npm
Step 4: Adding babel
Step 5: Adding webpack
Step 6: Adding eslint and prettier
-----------------------------------------
Step 1: Creating an git repo
>git init
create a file .gitignore , .env and etc

Step 2: Initializing a basic web project
>mkdir src
>cd src
>touch index.html [using vs code type html, choose html5 template and add  <div id="root"></div> inside body and do necessary changes]
>touch index.js
Step 3 : Adding npm
>npm init -y or remove -y entered require information in root and it will create a package.json file on root folder
>npm i react react-dom [dependency]
"react and react-dom” are the types for React and React-Dom functions.
Step 4: Adding babel [Babel is a transpiler so we need to tell it what to transpile, we do this using presets. These are predefined configuration that is used to transpile different type to javascript to browsers understandable one]
> npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/runtime @babel/plugin-transform-runtime

@babel/core => the core package of babel.
@babel/preset-env => allows you to use the latest JavaScript.
@babel/preset-react => for using react.
@babel/plugin-transform-runtime => helps you use some modern features of js like async/await.

Create a file in root “.babelrc” for configuring babel
{
    "presets": [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {
          "runtime": "automatic"
        }
      ]
    ],
    "plugins": [
      [
        "@babel/plugin-transform-runtime",
        {
          "regenerator": true
        }
      ]
    ]
}
Step 5: Adding webpack
entry: specifies from which file to webpack first look and start bundling
resolve here helps to import without extensions and looks for file in order i.e tsx -> ts -> js
module: to define rules of how diff module should be loaded.
output: to specify where the bundled code should be outputted.
path: of the folder, in this case, build folder we created. 
filename: tells the name of the file of the bundled code, so it will take the name and the chuck reference of the file and combine them to create a filename for bundled output.
HtmlWebpackPlugin template : tells the webpack to use index.html file as a template to add bundled js file to and add index.html to the build folder.

mode sets the mode of app this will also set the environment variables in the node process.
devtool: is used to set that how the js files will be minified. So for the dev environment, we use a less minified version so its easy to debug and source-map for prod which gives very optimized and lightweight build files.

>npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader style-loader css-loader webpack-merge
>touch webpack.config.js

Step 6: Adding eslint and prettier
>touch .eslintrc.js and touch .prettierrc.js
>npm i -D eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks prettier eslint-plugin-prettier eslint-config-prettier

# Add below 4 line in package.json file with in scripts
"start": "webpack serve",
"build": "webpack",
 "lint": "eslint --fix \"./src/**/*.{js,jsx,ts,tsx,json}\"",
 "format": "prettier --write \"./src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""

 ## Application ##
 >npm run start and http://localhost:8080/
 >npm run lint
 >npm run format

 ## Adding bootstrap stylefor application npm install bootstrap 
 import 'bootstrap/dist/css/bootstrap.min.css'
 ## npm install react-router-dom 