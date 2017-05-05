# Steps to use facebook authentication in your app.

Initiate React Native project using ```react-native init [YourApp]```

Navigate to your project. ```cd [YourApp]```

Install Facebook SDK into your project. ```react-native install react-native-fbsdk```

Link Facebook SDK with RN packages and dependencies. ```react-native link react-native-fbsdk```


Configure the Native iOS Project

Open your project in Xcode or do
```
cd ios
open [YourApp].xcodeproj
```

In Xcode, copy your app's Bundle Identifier. It can be find in Identity section under General tab of your project. [Double click on the project name to open].

[Register your app, using Bundle Identifier]

Assuming you registered your app, download and unzip the Facebook SDK from "facebook for developers" URL and save it in your local Documents folder.

In Xcode, create new group named Frameworks inside your project.

From the Facebook SDK folder, drag the frameworks, ```Bolts.framework, FBSDKCoreKit.Framework, FBSDKLoginKit.Framework, FBSDKShareKit.Framework``` into your Xcode project's frameworks folder.

In Xcode, under Build Settings tab, make sure you have specified <b>Framework Search Paths</b> as <b>~/Documents/FacebookSDK</b>.

Right Click ```Info.plist``` and open it as source code. Find the tag ```<string>????</string>``` and paste the following code next to it.

```
<key>CFBundleURLTypes</key>
<array>
  <dict>
  <key>CFBundleURLSchemes</key>
  <array>
    <string>fb[App Id]</string>
  </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>[App Id]</string>
<key>FacebookDisplayName</key>
<string>[App Name]</string>
```

Do remember to replace the app id and name in the above code.

Open AppDelegate.m and add the following code.

```
#import <FBSDKCoreKit/FBSDKCoreKit.h>
```

Also add these in the same file.
```
- (void)applicationDidBecomeActive:(UIApplication *)application {
    [FBSDKAppEvents activateApp];
  }
  
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
  return [[FBSDKApplicationDelegate sharedInstance] application:application
                                                        openURL:url
                                              sourceApplication:sourceApplication
                                                     annotation:annotation];
}
```

Install ios_setup.js in the root folder by running the script at your project root folder.
```curl -O https://raw.githubusercontent.com/facebook/react-native-fbsdk/master/ios_setup.js```

Install the packages plist, xcode and adm-zip. ```npm install plist xcode adm-zip```

Run the script ios_setup.js. ```node ios_setup.js [App Id] [App Name]```

Now run, ```react-native run-ios```.

You will see the terminal window and the emulator appear, if everything works correctly.
