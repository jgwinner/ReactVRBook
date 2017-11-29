
## ERRATA: There is a bug in React 2.0.0 and "three-gltf2-loader" which is bundled with React 2.0.0

The "three-gltf-loader" version 1.2.0 will break react-vr 2.0.0; basically, glTF files cannot be loaded.

To fix this, download the source files, including package.json, and then open the Node.js command prompt, go to your project directory, issue the command: 

```npm install```

Hopefully, either react-vr or three-gltf-loader will fix the problem; if so, I'll update this repository and remove the package.json.

## BUG in the book

Please do an:

```npm install simple-raycaster```

Note that if you download package.json, and issue the npm install command, you do not have to do this.
