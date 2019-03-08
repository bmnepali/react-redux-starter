
# React Redux Starter

A project created with love using React, Redux, SCSS, Eslint, StyleLint, Prettier, Webpack, Html5. This page documents all steps that are necessary to get this project up and running.

![img](https://travis-ci.org/bmnepali/react-redux-starter.svg?branch=master) ![David](https://img.shields.io/david/bmnepali/react-redux-starter) ![GitHub](https://img.shields.io/github/license/bmnepali/react-redux-starter)

## Features
* React 16
* Webpack 4
* Babel 7
* Hot Module Replacement
* Pre-Commit Hook
  - Runs Pretifier
  - Runs Eslint Fix
  - Runs StyleLint Fix
* Eslint
* StyleLint
* Preetier
* SASS/SCSS using `scss-loader`, `css-loader` and `node-sass`
* Js Minification for Production
* css Minification for Production


## Guidlines for Developers
### Working On the Project

#### Prerequisists:
* Nodejs: > v8.12.0 (LTS) (Install Nodejs)
* Prefered Dev Machine: MAC (OSX) but can be done in any operating system

#### Installing the project:
##### Clone the Repo
`git clone https://github.com/bmnepali/react-redux-starter.git`

##### Install the node packages
* Go to the project directory:
`cd react-redux-starter`

* Then run command to install project dependencies
`npm install` or simply `npm i`

##### Run the project (development):
* Run the following command to run the project
`npm run start`

##### Run all tests for one time only
`npm run test` 

##### Run tests and watch for changes
`npm run test:watch` 

##### Run tests and gerate test coverage report
`npm run test:coverage` 

##### Updating Test Snapshots
`npm run test -- -u`
(To update the previous component's snapshots)

##### Run eslint for linting css, scss files
`npm run lint:style` 

##### Fixing linting issues in css/scss files
`npm run lint:style:fix`

##### Run eslint for linting js/jsx files
`npm run lint:js` 

##### Fixing linting issues in js/jsx files
`npm run lint:js:fix`

##### Making code preetier :) by formatting
`npm run pretify`

##### Debugging Test cases in browser
`npm run test:debug`

### Branch Structure (Git Workflow)
#### master : 
Where all our production ready project source code is stored. Mostly we dont touch this branch. Except for deployment.

#### staging: 
Where all our testing is done. Which means QA will use this branch for testing the solutions. After all things are ok, we merge staging in to master and deploy application. QA will only use this branch.

#### develop: 
Where our latest development code is kept. It holds the currently developed features after the Pull Request are approved by devs working on their separate feature branches.

#### feature-branch: 
It contains the task wise features developed by one or more developer. Which once approved will be merged into develop branch.
E.g: RRS-1001-some-awesome-feature (If you can reflect the task name as branch name, will be better!) But also remember your branch name mnust be concise and as sort as possible.

### Maintainer:
* Buddha Man Nepali
<info@bmnepali.com.np>

## Cheers 🍻😎
