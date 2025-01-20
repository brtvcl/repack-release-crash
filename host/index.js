import {ScriptManager, Federated} from '@callstack/repack/client';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const resolveURL = Federated.createURLResolver({
  containers: {
    federated: 'http://127.0.0.1:3000/[name][ext]',
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const url = resolveURL(scriptId, caller);
  if (url) {
    return {url, cache: false, query: {platform: Platform.OS}};
  }
  return undefined;
});

AppRegistry.registerComponent(appName, () => App);
