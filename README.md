The Image Gallery App is a React Native application designed to showcase a collection of images in an intuitive and user-friendly interface. It demonstrates the use of modern React Native features and best practices for building cross-platform mobile applications.

# Demo Video

Watch the demo video below to see the app in action:

[![Watch the demo](./demo-video-thumbnail.jpg)](./demo-video.mp4)

> **Note**: The demo video is included in the repository. You can find it at `./demo-video.mp4`.

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

### Running in Release Mode

To run the app in release mode on iOS, use the following command:

```sh
# Using npm
npm run ios --mode Release

# OR using Yarn
yarn ios --mode Release
```

For Android, you can generate a release APK or bundle by following the [official React Native guide](https://reactnative.dev/docs/signed-apk-android).

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Run Test cases

To run the test suite, use the following command:

```sh
# Using npm
npm run test

# OR using Yarn
yarn test
```

## Congratulations! :tada:

You've successfully run Image Gallery App. :partying_face: