import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.appcues.samples.ionic',
  appName: 'appcues-ionic-app',
  webDir: 'build',
  bundledWebRuntime: false,
  
  ios: {
    // Adding schema name so "npx cap run ios" knows what to look for
    scheme: "App",
  },
};

export default config;
