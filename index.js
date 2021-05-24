/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.js';
import {name as appName} from './app.json';
const WebFont = require('webfontloader');
// WebFont.load({
//   google: {
//     families: ["Lobster", "Cairo", "Fira Sans"],
//   },
// });
AppRegistry.registerComponent(appName, () => App);
