import { WebPlugin } from '@capacitor/core';
import { AppcuesConfig, IdentifyOptions, ScreenOptions, ShowOptions } from '.';

import type { AppcuesPlugin } from './definitions';

export class AppcuesWeb extends WebPlugin implements AppcuesPlugin {

  async initialize(options: AppcuesConfig): Promise<void> {
    console.log('Appcues initialize', options);
  }

  async identify(options: IdentifyOptions): Promise<void> {
    console.log(`Appcues.identify(userID: ${options.userID}, options: ${options.properties})`);
  }

  async screen(options: ScreenOptions): Promise<void> {
    console.log(`Appcues.screen(title: ${options.title}, options: ${options.properties})`);
  }

  async show(options: ShowOptions): Promise<void> {
    console.log(`Appcues.show(experienceID: ${options.experienceID})`);
  }    
}
