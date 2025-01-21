## Running host app

0. cd into host app

```
cd host
```

1. Install dependencies

```
npm install
```

2. Install pods

```
npx pod-install
```

3.1. Build app for iOS for Debug

```
npx react-native run-ios --mode Debug
```

3.2 Build app for iOS for Release

```
npx react-native run-ios --mode Release
```

(If you want to select device use --list-devices): `npx react-native run-ios --list-devices`

## Running federated app

0. cd into federated app

```
cd federated
```

1. Install dependencies

```
npm install
```

2. Start app

```
npm run start
```
