+++
title = 'Flutter Setup Speedrun'
date = 2024-10-14T20:31:52+05:30
draft = false
+++

# Setting up a flutter dev environment without android studio

## Open a terminal

On windows, open a powershell window (not administrator. you can find it by just searching `powershell` in windows search)
On mac, open the terminal app.

## Install a package manager

We use a command line package manager for ease of installation as we don't have to fiddle with the paths manually

{{< command-tabs >}}
{{< macos >}}
brew install package-name
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

### Install the emulator

{{< command-tabs >}}
{{< macos >}}
sdkmanager --install 'system-images;android-34;google_atd;arm64-v8a'\
sdkamnager --install emulator
{{</ macos >}}

{{< windows >}}
sdkmanager --install 'system-images;android-34;google_atd;arm64-v8a'\
sdkamnager --install emulator
{{</ windows >}}
{{</ command-tabs >}}

## Install the system image

{{< command-tabs >}}
{{< macos >}}

# for macbooks with latest M-series processors

avdmanager --verbose create avd --force --name "pixel_5_api30_google_atd_emulator" --package "system-images;android-30;google_atd;arm64-v8a" --tag "arm64-v8a" --abi "arm64-v8a" --device "pixel_6"
{{</ macos >}}

{{< windows >}}
avdmanager --verbose create avd --force --name "pixel_5_api30_google_atd_emulator" --package "system-images;android-30;google_atd;arm64-v8a" --tag "google_atd" --abi "arm64-v8a" --device "pixel_6"
{{</ windows >}}
{{</ command-tabs >}}

## Enable developer options

### Oneplus

https://www.youtube.com/watch?v=3ctYjzs9vVo

### Vivo

https://www.youtube.com/watch?v=FgxAWwLM480

### Realme

https://www.youtube.com/watch?v=qBCFzJOhbwg

### Redmi

https://www.youtube.com/watch?v=99PzC1MY6cc

### Oppo

https://www.youtube.com/watch?v=EyDvoKPO7Nk

### Samsung

https://www.youtube.com/watch?v=reudZ8GSpk4

### Nothing

https://www.youtube.com/watch?v=USNjvl-2s8M

### Poco

https://www.youtube.com/watch?v=UUhqVOrYLXA

## Connect yo'r phones!

After enabling developer options, connect your phones to
