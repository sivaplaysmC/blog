+++
title = 'Flutter Setup Speedrun'
date = 2024-10-14T20:31:52+05:30
draft = false
+++

# TL;DR

{{< command-tabs >}}
{{< macos >}}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\
echo ">>>>>> Git start <<<<<<<"\
brew install git\
\
echo ">>>>>> Java start <<<<<<<"\
brew install \-\-cask temurin@17\
\
echo ">>>>>> Flutter start <<<<<<<"\
brew install \-\-cask flutter\
\
echo ">>>>>> CLT start <<<<<<<"\
brew install \-\-cask android-commandlinetools\
\
echo ">>>>>> sdkmanager start <<<<<<<"\
sdkmanager \-\-install "platform-tools" "platforms;android-34" "cmdline-tools;latest" "build-tools;34.0.0"\
\
echo ">>>>>> vscode start <<<<<<<"\
brew install \-\-cask visual-studio-code\
\
flutter doctor \-\-android-licenses

## `Skip below steps if emulator not needed`

echo ">>>>> Emulator install - start <<<<<"\
sdkmanager \-\-install "system-images;android-34;google_atd;arm64-v8a" "emulator"\

echo ">>>>> AVD Creation <<<<<"\
avdmanager -v create avd -f -n Pi6eL-mark42 -d 26 -k "system-images;android-34;google_atd;arm64-v8a"\

{{</ macos >}}

{{< windows >}}

-   First Run
    `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
    In a powershell window, then paste the following commands.

Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression -ErrorAction ContinueSilently\
\
Write-Host ">>>>>> Git start <<<<<<<"\
scoop install git\
\
scoop bucket add extras\
scoop bucket add java\
\
Write-Host ">>>>>> Java start <<<<<<<"\
scoop install java/openjdk17\
\
Write-Host ">>>>>> Flutter start <<<<<<<"\
scoop install extras/flutter\
\
Write-Host ">>>>>> CLT start <<<<<<<"\
scoop install main/android-clt\
\
Write-Host ">>>>>> sdkmanager start <<<<<<<"\
sdkmanager \-\-install "platform-tools" "platforms;android-34" "cmdline-tools;latest" "build-tools;34.0.0"\
\
Write-Host ">>>>>> vscode start <<<<<<<"\
scoop install extras/vscode\
\
flutter doctor \-\-android-licenses

## `Skip below steps if emulator not needed`

Write-Host ">>>>> Emulator install - start <<<<<"
sdkmanager \-\-install "system-images;android-34;google_atd;x86_64" "emulator"

Write-Host ">>>>> AVD Creation <<<<<"
avdmanager -v create avd -f -n PixeL-2 -d 18 -k "system-images;android-34;google_atd;x86_64"

{{</ windows >}}
{{</ command-tabs >}}

# Setting up a flutter dev environment without android studio

### Pre-Requisites

-   Copying and pasting things into a terminal.
-   Typing passwords in the terminal when prompted.
-   Responding to Y/N choices on the terminal.

## Open a terminal

On windows, open a powershell window (not administrator. you can find it by just searching `powershell` in windows search)
On mac, open the terminal app.

## Install a package manager

We use a command line package manager for ease of installation as we don't have to fiddle with the paths manually

{{< command-tabs >}}
{{< macos >}}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{{</ macos >}}

{{< windows >}}
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser\
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
{{</ windows >}}
{{</ command-tabs >}}

## Setup package repositories

{{< command-tabs >}}
{{< macos >}}
🥳 nothing to do 🥳
{{</ macos >}}

{{< windows >}}
scoop install git\
scoop bucket add extras\
scoop bucket add java
{{</ windows >}}
{{</ command-tabs >}}

## Install OpenJDK and Android command line tools

JDK is necessary for compiling and packaging android applications. Android command line tools provide the bare minimal development environment for building and installing android applications using flutter.
(We won't be focusing on making iOS apps with flutter as apple demands a fee for developing iOS apps.)

{{< command-tabs >}}
{{< macos >}}
brew install openjdk@17\
brew install \-\-cask android-commandlinetools
{{</ macos >}}

{{< windows >}}
scoop install java/openjdk17\
scoop install main/android-clt
{{</ windows >}}
{{</ command-tabs >}}

## Installing flutter 😎

{{< command-tabs >}}
{{< macos >}}
brew install \-\-cask flutter
{{</ macos >}}

{{< windows >}}
scoop install extras/flutter
{{</ windows >}}
{{</ command-tabs >}}

## Initialising sdkmanager

SDKmanager is used to manage android sdk installations. Something similar to NVM (Node version manager), but for android toolchains and stuff.

In this section, we will install the bare minimum sdkmanager packages necessary for developing android apps with flutter

{{< command-tabs >}}
{{< macos >}}
sdkmanager \-\-install platform-tools\
sdkmanager \-\-install 'platforms;android-34'\
sdkmanager \-\-install 'build-tools;34.0.0'\
sdkmanager \-\-install "cmdline-tools;latest"
{{</ macos >}}

{{< windows >}}
sdkmanager \-\-install platform-tools\
sdkmanager \-\-install 'platforms;android-34'\
sdkmanager \-\-install 'build-tools;34.0.0'\
sdkmanager \-\-install "cmdline-tools;latest"
{{</ windows >}}
{{</ command-tabs >}}

## To emulate or not to emulate

At this point, if you have an android, you can either use emulator (create an android device INSIDE of your computer), or, you can connect your android to your machine and run your app on your phone. If you have a powerful laptop, you can use an emulator and call it a day.

iPhone users have no choice but to use the android emulator. So if you have an iPhone feel free to take a well deserved caffeine break and skip the next section.

## Setting up android development environment

This section is only for those that wish to run flutter apps on their phones. Feel free to skip this section if you plan on using an emulator.

### Enable developer options

#### Oneplus

https://www.youtube.com/watch?v=3ctYjzs9vVo

#### Vivo

https://www.youtube.com/watch?v=FgxAWwLM480

#### Realme

https://www.youtube.com/watch?v=qBCFzJOhbwg

#### Redmi

https://www.youtube.com/watch?v=99PzC1MY6cc

#### Oppo

https://www.youtube.com/watch?v=EyDvoKPO7Nk

#### Samsung

https://www.youtube.com/watch?v=reudZ8GSpk4

#### Nothing

https://www.youtube.com/watch?v=USNjvl-2s8M

#### Poco

https://www.youtube.com/watch?v=UUhqVOrYLXA

### Connect yo'r phones!

After enabling developer options, unlock your phone, and connect it to your pc. you should get a prompt that says something like `allow developer options`, make sure to allow it.
Once this step is done, you can skip to the vscode setup part, or continue to install an emulator if you want.

### Install the emulator

{{< command-tabs >}}
{{< macos >}}
sdkmanager \-\-install 'system-images;android-34;google_atd;arm64-v8a'\
sdkamnager \-\-install emulator
{{</ macos >}}

{{< windows >}}
sdkmanager \-\-install 'system-images;android-34;google_atd;arm64-v8a'\
sdkamnager \-\-install emulator
{{</ windows >}}
{{</ command-tabs >}}

## Install the emulator

{{< command-tabs >}}
{{< macos >}}
sdkmanager \-\-install "system-images;android-34;google_atd;arm64-v8a" "emulator"
avdmanager -v create avd -f -n Pi6eL-mark42 -d 26 -k "system-images;android-34;google_atd;arm64-v8a"

{{</ macos >}}

{{< windows >}}
sdkmanager \-\-install "system-images;android-34;google_atd;x86_64" "emulator"
avdmanager -v create avd -f -n Pi6eL-2 -d 18 -k "system-images;android-34;google_atd;x86_64"

{{</ windows >}}
{{</ command-tabs >}}

Note: MacOS commands for setting up emulator through the command line _may_ not work, due to some differences between macOS and windows versions of flutter.

## Setting up Visual Studio Code

Instal the [Flutter for vscode extension](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter)

Then press `Control-Shift-P` to bring up the command pane.

Search and select the `Flutter: New Project` option to create a new flutter project.

Once done, now select your required device (emulator or connected android device) by using the device selector in the extreme bottom right corner of VSCode.

Now, press on the `run` annotation on top of the main function in the editor window.
(this part may take a large amount of time )

✨ Flutter w/ Android is up and running ✨
