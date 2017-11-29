
## ERRATA: There is a bug in React 2.0.0 and "three-gltf2-loader" which is bundled with React 2.0.0

The "three-gltf-loader" version 1.2.0 will break react-vr 2.0.0; basically, glTF files cannot be loaded.

To fix this, download the source files, including package.json, and then open the Node.js command prompt, go to your project directory, issue the command: 

```npm install```

Hopefully, either react-vr or three-gltf-loader will fix the problem; if so, I'll update this repository and remove the package.json.

The fix for your own files is to edit your package.json to add the following:

```"three-gltf2-loader": "=1.1.0 || > 1.2.1"```

This tells npm or your package manager that you need exactly version 1.1.0 of three-gltf2-loader OR anything above version 1.2.1. Currently version 1.2.0 has the bug; version 1.1.0 works fine. 

## BUG in the book

I forgot to specify this in the book, so if you don't download package.json, then please do an:

```npm install simple-raycaster```

Note that if you download package.json, and issue the npm install command, you do not have to do this.
