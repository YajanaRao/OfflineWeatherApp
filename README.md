# Offline first weather App

Offline first weather app using redux toolkit and sqlite 2

## Portrait View

![Portrait View](./docs/portrait.jpg)

## Landscape View

![Landscape View](./docs/landscape.jpg)

## Setup

### Install the dependencies

```shell
# yarn
yarn install

# npm
npm install
```

### Install pods

```
pod install
```

### Run the metro bundler

```
yarn start
```

### Run the application on the device

```shell
# android
yarn android

# ios
yarn ios

# web
yarn web
```

## Library used

- redux-toolkit
- react-native-sqlite-2

## useWeather hook

`useWeather` is a custom hook created to handle network request failure and return the offline state and update the latest data in case of network request success.

## useDatabase function

`useDatabase` is used as a wrapper around sqlite 2 db object.
