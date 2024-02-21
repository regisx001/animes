import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.anime.svelteapplication',
  appName: 'Watch Animes',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
