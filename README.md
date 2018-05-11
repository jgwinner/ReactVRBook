# Welcome to Getting Started with React 360

Yes, the name of the product has been changed from React VR to React 360.

If there are any changes in the samples, I will update the code here; things will be more up to date on GitHub than on the .zip from Packt.

This repository has the source, graphics, and models for examples from the book "Getting Started with React VR" by Packt publishing. I have created this repository to store the files used in examples and exercises, and to allow technical editors and myself to make any corretions to the files.

## ERRATA: There is a bug in React 2.0.0 and "three-gltf2-loader" which is bundled with React 2.0.0

The "three-gltf-loader" version 1.2.0 will break react-vr 2.0.0; basically, glTF files cannot be loaded.

To fix this, download the source files, including package.json, and then open the Node.js command prompt, go to your project directory, issue the command: 

```npm install```

Hopefully, either react-vr or three-gltf-loader will fix the problem; if so, I'll update this repository and remove the package.json.

The fix for your own files is to edit your package.json to add the following:

```"three-gltf2-loader": "=1.1.0 || > 1.2.1"```

This tells npm or your package manager that you need exactly version 1.1.0 of three-gltf2-loader OR anything above version 1.2.1. Currently version 1.2.0 has the bug; version 1.1.0 works fine. 

## BUG in the book, Chapter 11

I forgot to mention installing the simple-raycaster in the book, so if you don't download package.json, then please do an:

```npm install simple-raycaster```

Note that if you download package.json, and issue the npm install command, this will be done for you.

# Chapters in the book

## 1: What is Virtual Reality, Really? 
No source code

## 2: Flatland and Beyond: VR Programming
No source code

## 3.D or Reality in Dimensions Other than X and Y
No source code

## 4: The React VR Library

## 5: Your First VR App 

  - Space Gallery
  - Background (Pano) and model files
  - Teapot
  - Final world with background, pedestals, and the teapot
  https://github.com/jgwinner/ReactVRBook/tree/master/Chapter5 

## 6: Working with Poly and the Gon Family
## 7: Sitting Down with a (Virtual) Teapot

  - The tile texture
  - Teapot, flat and smooth shaded
  - Teapot with tiles
  - Better floor tiles
  https://github.com/jgwinner/ReactVRBook/tree/master/Chap6-7/Final
  
## 8: Breath Life in Your World 

  - Boiling sound files
  - World with boiling teapot
  https://github.com/jgwinner/ReactVRBook/tree/master/Chapter8 

## 9: Do It Yourself – Native Modules and Three.js

  - Button click sounds
  - Bouncing cube 
  https://github.com/jgwinner/ReactVRBook/tree/master/Chapter9

## 10: Bringing in the Real Live World 

  - Background pano (constructed from a NASA Mars image)
  - Code and objects for a 3D user interface
  https://github.com/jgwinner/ReactVRBook/tree/master/Chapter10/MarsInfo
  
  BONUS: An additional chapter with the buttons hooked up coming shortly
    For page length reasons (I went > 30 pages over the target book) I had to cut it short; we show how to make gaze buttons in Chapter 11, so I cut gaze buttons from this chapter. Here, I'll hook them up for you.
    You will learn more if you do it yourself, however.

## 11: Take a Walk on the Wild Side 
  - ERRATA: There is a bug in React 2.0.0 and "three-gltf2-loader" which is bundled with React 2.0.0
  - To fix this, download the source files, including package.json, and then open the Node.js command prompt, go to your project directory, issue the command:
  npm install
  - Files include the maze generation objects, both HTML and WebVR
  - Gem, hedge, and floor objects and .blend files where appropriate
  https://github.com/jgwinner/ReactVRBook/tree/master/Chapter11/WalkInAMaze

## 12: Publishing Your App, and Where to Go from Here

No source code

# Notes on source files

In most cases, these files are sucessive changes to 'index.vr.js' However, in some cases I will present them as' index_cool_feature.vr.js' in the source here. When you obtain these files (through a .zip download or clone), please rename the file to index.vr.js.

I thought about making a whole new branch (confusing to some), a whole new directory (can take minutes to create all of the React/ReactVR supporting files), and decided the rename was the easiest way to do it. I'm open to suggestions on better ways!

# How to use the files

Either:

 1. Read my book to find out

OR:

 1. Download Node.js
 2. Use npm to install ReactVR
 3. Initialize a new directory
 
In both cases, you then :

 4. Replace the index.vr.js files with the appropriate index_cool_feature.vr.js and client.js (located in the VR folder)
 5. Put any model files, etc. in the static_assets folder.
 
 Note that for a large website, you may want to split up the static_assets folder and reorganize your source; these examples have been left artificially simple so as not to clutter up the examples.
 
 Also please note, you really should leave more comments in source. I've added more comments in the comitted files than are in the book; this was to avoid blowing up the page count.



