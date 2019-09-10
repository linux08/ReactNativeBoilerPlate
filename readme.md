# 🚀 React Native Typescript Boilerplate

[![React Native](https://img.shields.io/badge/React%20Native-v0.60.5-blue.svg)](https://facebook.github.io/react-native/)
[![Redux](https://img.shields.io/badge/Redux-v4.0.4-blue.svg)](https://redux.js.org/)
[![React Navigation V4](https://img.shields.io/badge/React%20Navigation-v3.11-blue.svg)](https://reactnavigation.org/)
[![Axios](https://img.shields.io/badge/Axios-v0.19.0-blue.svg)](https://github.com/axios/axios)
[![Redux Persist](https://img.shields.io/badge/Redux%20Persist-v5.10.0-blue.svg)](https://github.com/rt2zz/redux-persist)

## Features

- [Redux](http://redux.js.org/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [Axios](https://github.com/axios/axios)

## Prerequisites

- [Node](https://nodejs.org) v10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git clone https://github.com/linux08/ReactNativeBoilerPlate.git` <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Open `package.json` and change the `name` property with your project name
4. Open `app.json` and replace `'MyReactNativeBoilerPlate'` with your project name
5. Run `yarn install` or `npm install` to install dependencies
6. Run `react-native upgrade --legacy true` to generate new android and iOS folder
7. Run `react-native-link`
   -- Run `npm run android` to start on android

- On iOS
  1. cd into the ios folder
  2. run `pod update`
  3. cd into your root project directory then run `npm run ios`

## Contributing

PRs are welcome
