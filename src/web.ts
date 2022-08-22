import { WebPlugin } from '@capacitor/core';
import { IdentifyOptions, ScreenOptions, ShowOptions } from '.';

import type { AnonymousOptions, AppcuesPlugin, GroupOptions, InitializeOptions, TrackOptions, VersionResponse } from './definitions';

export class AppcuesWeb extends WebPlugin implements AppcuesPlugin {
  async initialize(options: InitializeOptions): Promise<void> {
    console.log('Appcues initialize');
    console.log("accountId: ", options.accountId)
    console.log("applicationId: ", options.applicationId)
    console.log("config: ", options.config)
  }

  async getVersion(): Promise<VersionResponse> {
    console.log('Appcues.getVersion()')
    return { version: "0.0.0" }
  }

  async identify(options: IdentifyOptions): Promise<void> {
    console.log(`Appcues.identify(userID: ${options.userId}, options: ${options.properties})`);
  }

  async group(options: GroupOptions): Promise<void> {
    console.log(`Appcues.group(groupID: ${options.groupId}, options: ${options.properties})`);
  }

  async anonymous(options: AnonymousOptions): Promise<void> {
    console.log(`Appcues.anonymous(options: ${options.properties})`);
  }

  async screen(options: ScreenOptions): Promise<void> {
    console.log(`Appcues.screen(title: ${options.title}, options: ${options.properties})`);
  }

  async track(options: TrackOptions): Promise<void> {
    console.log(`Appcues.track(name: ${options.name}, options: ${options.properties})`);
  }

  async show(options: ShowOptions): Promise<void> {
    console.log(`Appcues.show(experienceID: ${options.experienceId})`);
  }    

  async reset(): Promise<void> {
    console.log(`Appcues.reset()`);
  }

  async stop(): Promise<void> {
    console.log(`Appcues.stop()`);
  }

  async debug(): Promise<void> {
    console.log(`Appcues.debug()`);
  }
}
