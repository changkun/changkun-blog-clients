<img src="logo.png" alt="logo" height="120" align="right" />

# Changkun's Blog Clients

[*Changkun's Blog*](https://changkun.us/) *Desktop&Mobile Clients, powered by* [*Electron*](http://electron.atom.io) & [*React Native*](http://facebook.github.io/react-native/).

For quickly build desktop and mobile versions, just:

```bash
./build.sh
```

All release version will be output in `./release` folder.

## Desktop Version

Desktop clients support `macOS/Windows/Linux(Ubuntu)` platform. If you would like to only build desktop version, the following instractions help you to build desktop clients.

To install dependencies:

```bash
npm install
```

To build all platform:

```bash
npm run build
```

To build specific platform:

```bash
npm run build-mac       # for macOS x64
npm run build-win       # for windows x64
npm run build-linux     # for linux ubuntu x64
```

> Please note that 32-bit version is not recommended, I will never support that.

## Mobile Version

Comming soon...


## License

Copyright &copy; 2016 Changkun Ou. All rights reserved.

The code is distributed under the MIT license. See [LICENSE](./LICENSE) in this directory for more details.



