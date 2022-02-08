# MoneyMovement
This is a project written in react-native and typescript which lets you track your monetary transactions and their carbon footprint - making it easier to keep track of your personal impact on climate change.

You can analyze your spending habits for the current month with the help of the chart or you can go search or scroll through all of the payments you've made - categorized and sorted by date.

By pressing on a transaction in the list you'll be navigated to a view containing more detailed information about your payment.

## Possible improvements
- Improve configurability of the chart by adding the possibility to select a different date range.
- Navigate to a list containing the selected day's transactions when pressing on a dot in the chart.
- Add an additional chart tracking the summarized carbon footprint data.
- Add support for filtering the list by transaction type and by category.
- In the details view - make the category and type values pressable. When pressed they should lead you to a pre-filtered list containing only transactions of the selected type/category.
- Add possibility to exclude a transaction from the analytics.

# iOS

## Installing dependencies 

You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

### Yarn

Yarn is a package manager for your code. It allows you to use and share (e.g. JavaScript) code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.

We recommend installing Yarn by going through  [Yarn installation](https://classic.yarnpkg.com/lang/en/docs/install). 

### Node & Watchman

We recommend installing Node and Watchman using  [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

```
brew install node
brew install watchman
```
If you have already installed Node on your system, make sure it is has a version of ^12.22.0 || ^14.17.0 || >=16.0.0

### Xcode[​](https://reactnative.dev/docs/environment-setup#xcode "Direct link to heading")

The easiest way to install Xcode is via the  [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 10 or newer.

#### Command Line Tools

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

![Xcode Command Line Tools](https://reactnative.dev/assets/images/GettingStartedXcodeCommandLineTools-8259be8d3ab8575bec2b71988163c850.png)

#### Installing an iOS Simulator in Xcode[​](https://reactnative.dev/docs/environment-setup#installing-an-ios-simulator-in-xcode "Direct link to heading")

To install a simulator, open  **Xcode > Preferences...**  and select the  **Components**  tab. Select a simulator with the corresponding version of iOS you wish to use.

#### CocoaPods[​](https://reactnative.dev/docs/environment-setup#cocoapods "Direct link to heading")

[CocoaPods](https://cocoapods.org/)  is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager, however we recommend that you use the standard Ruby available on macOS unless you know what you're doing.

Using the default Ruby install will require you to use  `sudo`  when installing gems. (This is only an issue for the duration of the gem installation, though.)

```
sudo gem install cocoapods
```
### React Native Command Line Interface

React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using  `npx`, which ships with Node.js. With  `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.

## Running the application
```
yarn install
cd ios && pod install
cd .. && npx react-native run-ios --configuration Release
```
## Running the tests
```
yarn run test
```

# Android (macOs)
## Installing dependencies

You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

### Yarn

Yarn is a package manager for your code. It allows you to use and share (e.g. JavaScript) code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.

We recommend installing Yarn by going through  [Yarn installation](https://classic.yarnpkg.com/lang/en/docs/install). 

### Node & Watchman

We recommend installing Node and Watchman using  [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

```
brew install node
brew install watchman
```

If you have already installed Node on your system, make sure it is has a version of ^12.22.0 || ^14.17.0 || >=16.0.0

### Java Development Kit

We recommend installing JDK using  [Homebrew](http://brew.sh/). Run the following commands in a Terminal after installing Homebrew:

```
brew install --cask adoptopenjdk/openjdk/adoptopenjdk11
```

If you have already installed JDK on your system, make sure it is JDK 11 or newer.

### Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

#### 1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

-   `Android SDK`
-   `Android SDK Platform`
-   `Android Virtual Device`

Then, click "Next" to install all of these components.

> If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

#### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the  `Android 10 (Q)`  SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

![Android Studio Welcome](https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeMacOS-cbb28b4b70c4158c1afd02ddb6b12f4a.png)

> The SDK Manager can also be found within the Android Studio "Preferences" dialog, under  **Appearance & Behavior**  →  **System Settings**  →  **Android SDK**.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the  `Android 10 (Q)`  entry, then make sure the following items are checked:

-   `Android SDK Platform 29`
-   `Intel x86 Atom_64 System Image`  or  `Google APIs Intel x86 Atom System Image`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that  `29.0.2`  is selected and check the "Android SDK Command-line Tools (latest)".

Finally, click "Apply" to download and install the Android SDK and related build tools.

You can also run the following command after setting ANDROID_HOME.

```
sdkmanager "platforms;android-29" "system-images;android-29;default;x86_64" "system-images;android-29;google_apis;x86"
sdkmanager "cmdline-tools;latest" "build-tools;29.0.2"
```



#### 3. Configure the ANDROID_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your  `$HOME/.bash_profile`  or  `$HOME/.bashrc`  (if you are using  `zsh`  then  `~/.zprofile`  or  `~/.zshrc`) config file:

```
export ANDROID_HOME=$HOME/Library/Android/sdkexport
PATH=$PATH:$ANDROID_HOME/emulatorexport
PATH=$PATH:$ANDROID_HOME/toolsexport
PATH=$PATH:$ANDROID_HOME/tools/binexport
PATH=$PATH:$ANDROID_HOME/platform-tools
```


> `.bash_profile`  is specific to  `bash`. If you're using another shell, you will need to edit the appropriate shell-specific config file.

Type  `source $HOME/.bash_profile`  for  `bash`  or  `source $HOME/.zprofile`  to load the config into your current shell. Verify that ANDROID_HOME has been set by running  `echo $ANDROID_HOME`  and the appropriate directories have been added to your path by running  `echo $PATH`.

> Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under  **Appearance & Behavior**  →  **System Settings**  →  **Android SDK**.

### React Native Command Line Interface

React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using  `npx`, which ships with Node.js. With  `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.

## Running the application
```
yarn install
npx react-native run-android --configuration Release
```

## Running the tests
```
yarn run test
```

# Android (Windows)
## Installing dependencies

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

### Yarn

Yarn is a package manager for your code. It allows you to use and share (e.g. JavaScript) code with other developers from around the world. Yarn does this quickly, securely, and reliably so you don’t ever have to worry.

We recommend installing Yarn by going through  [Yarn installation](https://classic.yarnpkg.com/lang/en/docs/install). 

### Node, JDK

We recommend installing Node via  [Chocolatey](https://chocolatey.org/), a popular package manager for Windows.

It is recommended to use an LTS version of Node. If you want to be able to switch between different versions, you might want to install Node via  [nvm-windows](https://github.com/coreybutler/nvm-windows), a Node version manager for Windows.

React Native also requires  [Java SE Development Kit (JDK)](https://openjdk.java.net/projects/jdk/11/), which can be installed using Chocolatey as well.

Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

```
choco install -y nodejs-lts openjdk11
```

If you have already installed Node on your system, make sure it is has a version of ^12.22.0 || ^14.17.0 || >=16.0.0. If you already have a JDK on your system, make sure it is version 11 or newer.

> You can find additional installation options on  [Node's Downloads page](https://nodejs.org/en/download/).

> If you're using the latest version of Java Development Kit, you'll need to change the Gradle version of your project so it can recognize the JDK. You can do that by going to  `{project root folder}\android\gradle\wrapper\gradle-wrapper.properties`  and changing the  `distributionUrl`  value to upgrade the Gradle version. You can check out  [here the lastest releases of Gradle](https://gradle.org/releases/).

### Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

#### 1. Install Android Studio

[Download and install Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

-   `Android SDK`
-   `Android SDK Platform`
-   `Android Virtual Device`
-   If you are not already using Hyper-V:  `Performance (Intel ® HAXM)`  ([See here for AMD or Hyper-V](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html))

Then, click "Next" to install all of these components.

> If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

#### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the  `Android 10 (Q)`  SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "Configure" button and select "SDK Manager".

![Android Studio Welcome](https://reactnative.dev/assets/images/GettingStartedAndroidStudioWelcomeWindows-b88d46e9a7fe5e050224a9a295148222.png)

> The SDK Manager can also be found within the Android Studio "Preferences" dialog, under  **Appearance & Behavior**  →  **System Settings**  →  **Android SDK**.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the  `Android 10 (Q)`  entry, then make sure the following items are checked:

-   `Android SDK Platform 29`
-   `Intel x86 Atom_64 System Image`  or  `Google APIs Intel x86 Atom System Image`

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that  `29.0.2`  is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

#### 3. Configure the ANDROID_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

1.  Open the  **Windows Control Panel.**
2.  Click on  **User Accounts,**  then click  **User Accounts**  again
3.  Click on  **Change my environment variables**
4.  Click on  **New...**  to create a new  `ANDROID_HOME`  user variable that points to the path to your Android SDK:

![ANDROID_HOME Environment Variable](data:image/png;base64,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)

The SDK is installed, by default, at the following location:

```
%LOCALAPPDATA%\Android\Sdk
```

You can find the actual location of the SDK in the Android Studio "Settings" dialog, under  **Appearance & Behavior**  →  **System Settings**  →  **Android SDK**.

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

1.  Open powershell
2.  Copy and paste  **Get-ChildItem -Path Env:\**  into powershell
3.  Verify  `ANDROID_HOME`  has been added

#### 4. Add platform-tools to Path

1.  Open the  **Windows Control Panel.**
2.  Click on  **User Accounts,**  then click  **User Accounts**  again
3.  Click on  **Change my environment variables**
4.  Select the  **Path**  variable.
5.  Click  **Edit.**
6.  Click  **New**  and add the path to platform-tools to the list.

The default location for this folder is:

```
%LOCALAPPDATA%\Android\Sdk\platform-tools
```

### React Native Command Line Interface

React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using  `npx`, which ships with Node.js. With  `npx react-native <command>`, the current stable version of the CLI will be downloaded and executed at the time the command is run.

## Running the application
```
yarn install
npx react-native run-android --configuration Release
```

## Running the tests
```
yarn run test
```
