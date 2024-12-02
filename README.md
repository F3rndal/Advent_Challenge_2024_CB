# Advent_Challenge_2024_CB
Coding Advent Challenge 2024 - Coding Buddies
https://codingbuddies.de/advent-2024

Code mit! Bearbeite jeden Tag eine User Story, baue die Handy-App, sammle Übung und gewinne ein Weihnachtsgeschenk!

Die Spielregeln:
• Hier erscheint jeden Tag vom 1. bis 24. Dezember eine User Story
• Bearbeite die User Stories
• Nutze das Framework, Programmiersprache etc. deiner Wahl
• Stelle die Challenge bis zum 30.12.2024 fertig
• Unter allen Teilnehmenden verlosen wir ein Weihnachtsgeschenk
• Die Einreichungen gucken wir uns live auf Twitch zusammen an!

## day 1
Select your App Framework
As developer
I want to select a framework so that I am able to start my development
GIVEN
I want to start developing the app
WHEN
I did a research of different frameworks
THEN
I create a list of potential frameworks with their pros and cons
AND
make a decision which framework to use

List of frameworks with pros and cons: 
(research tool: ChatGPT)

### 1. React Native
Platforms: iOS, Android
Language: JavaScript (with TypeScript support)  
Pros:  
- Write code once and use it for both platforms.
- Large community and many libraries.
- Almost native performance.
- TypeScript support.  
Cons:  
- Some features require native modules (e.g., camera, Bluetooth).
- Performance can lag with complex animations.

### 2. Flutter
Platforms: iOS, Android, Web, Desktop
Language: Dart
Pros:
- Very fast performance with native compilation.
- Consistent designs using its own widget system.
- Cross-platform development (including web and desktop).
Cons:
- Dart is less popular than JavaScript.
- Larger app size (default apps start at ~10 MB).

### 3. Ionic
Platforms: iOS, Android, Web (PWA)
Language: JavaScript, HTML, CSS (with Angular, React, or Vue)
Pros:
- Uses familiar web technologies (HTML, CSS, JavaScript).
- Easy to get started, especially for web developers.
- Support for Progressive Web Apps (PWAs).
Cons:
- No native UI, so slightly lower performance than Flutter or React Native.
- UI can sometimes feel "less native."

### 4. NativeScript
Platforms: iOS, Android
Language: JavaScript, TypeScript, Angular, Vue
Pros:
- Direct access to native APIs (no bridges required).
- Supports TypeScript, Angular, and Vue.
- Almost native performance.
Cons:
- Smaller community and fewer libraries than React Native or Flutter.
- Can be more complex when working with advanced features.

### 5. Xamarin
Platforms: iOS, Android, Windows
Language: C#
Pros:
- Great for developers who like C# and the .NET ecosystem.
- Native UI and performance.
- Strong support from Microsoft.
Cons:
- Can become complex for larger projects.
- Slightly less flexible than other frameworks.

### 6. Swift (for iOS) and Kotlin (for Android)
Platforms: iOS (Swift), Android (Kotlin)
Language: Swift or Kotlin
Pros:
- Best performance and control since it’s native.
- Full access to platform-specific features.
Cons:
- No cross-platform support.
- Slower development since you need separate codebases for each platform.

### 7. Expo (React Native Extension)
- Platforms: iOS, Android
- Language: JavaScript (with TypeScript support)
Pros:
- Simplifies development with React Native.
- No need for Android Studio or Xcode.
- Easy testing and deployment.
Cons:
- Some advanced native features are not supported.
- Can be limiting in more complex projects.

### 8. Apache Cordova
Platforms: iOS, Android, Web
Language: JavaScript, HTML, CSS
Pros:
- Uses web technologies many developers already know.
- Supports many plugins.
Cons:
- Lower performance compared to native frameworks.
- Fewer updates compared to modern frameworks.

### 9. Framework7
Platforms: iOS, Android, Web (PWA)
Language: JavaScript, HTML, CSS (can be used with React or Vue)
Pros:
- Easy to learn.
- Beautiful native-like UI components.
Cons:
- Not as flexible or performant as Flutter or React Native.

### 10. Unity (for Game Apps)
Platforms: iOS, Android, Windows, Web
Language: C#
Pros:
- Excellent for 2D or 3D games.
- Cross-platform support.
- Large community and many tutorials.
Cons:
- Not ideal for regular apps.
- Can have a steep learning curve.

### 11. Kotlin Multiplatform Mobile (KMM)
Platforms: iOS, Android
Language: Kotlin
Pros:
- Share logic between Android and iOS.
- Perfect for developers experienced with Kotlin.
Cons:
- Still relatively new and has limited documentation.
- UI must be created separately for each platform.


### Decition which framework to use: 
I excluded all frameworks which are not JS based. Because that the only language I have experience in.
My two favorites are Reacte Native and Ionic
I choose Reacte Native because of the big community and the easy start by offering a complete environment.

## Day 2
Setup app project  
As developer  
I want to setup a development environment
so that I can building the app  
GIVEN  
I have chosen a framework  
WHEN  
I installed the required tools like IDE, SDK, etc.  
THEN  
I should have a functioning environment ready to start coding  
AND  
I can run the frameworks default app  

Installed Reacte Native and Expo  
installed Expo go mobil app 
use **npx expo start** to create QR code for Expo go app  
created a blank(typescript) default app  
