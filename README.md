
Video Cropper

A React Native Video Diary App that allows users to import videos, crop 5-second segments, add names and descriptions, and save cropped videos for future reference.

Table of Contents
Features
Requirements
Installation
Usage
Technologies Used
Contributing
License
Acknowledgments
Features
Import Videos: Choose videos from your device's library.
Crop Videos: Select and crop 5-second segments from imported videos.
Add Metadata: Provide names and descriptions for cropped videos.
Video List: View a list of all your saved cropped videos with persistent storage.
Edit Videos (Bonus): Edit the name and description of existing cropped videos.
Delete Videos: Remove videos you no longer need.
Responsive Design: Clean and minimalist UI with responsive styling using NativeWind.
Form Validation: Ensure proper input using Zod validation schemas.
Requirements
Node.js (version 14 or higher)
Yarn or npm
Expo CLI
Android or iOS device/emulator
FFmpeg Kit (for video processing)
Installation
Clone the Repository

BASH

git clone https://github.com/yourusername/video-cropper.git
Navigate to the Project Directory

BASH

cd video-cropper
Install Dependencies

Using Yarn:

BASH

yarn install
Or using npm:

BASH

npm install
Install Expo CLI if you haven't already

BASH

npm install -g expo-cli
Start the Expo Development Server

BASH

expo start
Run on Device or Simulator

For iOS Simulator: Press i in the terminal.
For Android Emulator: Press a in the terminal.
For Physical Device: Use the Expo Go app to scan the QR code.
Usage
Add a Video

On the home screen, tap the "Add Video" button.
Select a video from your device's library.
Crop the Video

Use the scrubber to select a 5-second segment.
Tap "Next" to proceed.
Add Metadata

Enter a name and description for the cropped video.
Tap "Save" to store the video.
View Cropped Videos

The main screen displays a list of your saved videos.
Tap on a video to view details.
Edit or Delete Videos

In the video details screen, you can edit the name and description.
Swipe left on a video in the list to reveal the "Delete" option.
Technologies Used
React Native - Cross-platform mobile app development.
Expo - React Native framework and platform.
Expo Router - Routing and navigation within the app.
Zustand - Lightweight state management solution.
Tanstack Query (React Query) - Managing asynchronous data and mutations.
FFmpeg Kit - Video processing library for cropping videos.
NativeWind - Styling using Tailwind CSS in React Native.
Expo SQLite - Structured, persistent storage for video data.
React Native Reanimated - For smooth animations within the app.
Zod - Validation schemas for form input handling.
Expo AV - Video rendering and playback.
Contributing
Contributions are welcome! Please follow these steps:

Fork the Repository

Create a New Branch

BASH

git checkout -b feature/YourFeatureName
Make Your Changes

Commit Your Changes

BASH

git commit -m 'Add some feature'
Push to Your Branch

BASH

git push origin feature/YourFeatureName
Open a Pull Request

Go to your forked repository.
Click on "New Pull Request" and submit your changes for review.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Expo Documentation
React Native Documentation
FFmpeg Kit Documentation
Tanstack Query Documentation
NativeWind Documentation
Zustand Documentation
Zod Documentation
